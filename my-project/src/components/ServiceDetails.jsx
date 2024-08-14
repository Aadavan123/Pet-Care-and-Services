import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Service1 from '../Service1';
import '../assets/ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = Service1.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-details-container">
      <img src={service.image_url} alt={service.name} className="service-details-image" />
      <button className="back-button" onClick={() => navigate(-1)}>Back</button> 
        <h2>{service.name}</h2>
        <p>Description: {service.description}</p>
        <p className="service-details-price">Price: ${service.price}</p>
      </div>
  );
};

export default ServiceDetails;
