import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../redux/CartSlice';
import { toast } from 'react-toastify';
import '../assets/PetCard.css';

const PetCard = ({ pet }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdoptClick = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart(pet));
    toast.success(`${pet.name} has been added to your cart!`,{
      position: "bottom-right",
      autoClose: 1000,
      theme: 'dark',
  });
  };

  const handleCardClick = () => {
    navigate(`/pets/${pet.id}`);
  };

  return (
    <div className="pet-card" onClick={handleCardClick}>
      <div className="pet-image-container">
        <img src={pet.image_url} alt={pet.name} className="pet-image" />
      </div>
      <div className="pet-details">
        <h3 className="pet-name">{pet.name}</h3>
        <p className="pet-behaviour">Behaviour: {pet.behaviour}</p>
        <p className="pet-type">Type: {pet.type}</p>
        <p className="pet-price">Price: ${pet.price}</p>
        <button
          className="adopt-button"
          onClick={handleAdoptClick}
        >
          Adopt
        </button>
      </div>
    </div>
  );
};

export default PetCard;
