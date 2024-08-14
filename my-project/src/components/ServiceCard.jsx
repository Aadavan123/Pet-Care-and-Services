import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';
import '../assets/ServiceCard.css';
import { toast } from 'react-toastify';

const ServiceCard = ({ service }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBook = (event) => {
    event.stopPropagation(); // Prevent card click event when clicking the button
    dispatch(addItemToCart(service));
    toast.success('Service added to cart!',{
      position: "bottom-right",
      autoClose: 1000,
      theme: 'dark', 
  })
  };

  const handleCardClick = () => {
    navigate(`/services/${service.id}`);
  };

  return (
    <div className="service-card" onClick={handleCardClick}>
      <img src={service.image_url} alt={service.name} className="service-image" />
      <div className="service-details">
        <h3 className="service-name">{service.name}</h3>
        <p className="service-caretaker">Caretaker: {service.caretaker_name}</p>
        <p className="service-cost">Cost: ${service.price}</p>
        <button 
          className="adopt-button" 
          onClick={handleBook}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
