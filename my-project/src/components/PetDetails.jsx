import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Pet1 from '../Pet1'; // Import your pet data
import '../assets/PetDetails.css'; // Create and import styles for PetDetails

const PetDetails = () => {
  const { id } = useParams(); // Get pet ID from URL
  const [pet, setPet] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const selectedPet = Pet1.find(pet => pet.id === parseInt(id));
    setPet(selectedPet);
  }, [id]);

  if (!pet) return <div>Loading...</div>;

  return (
    <div className="pet-details-container">
      <img src={pet.image_url} alt={pet.name} className="pet-image" />
      <button className="back-button" onClick={() => navigate(-1)}>Back</button> 
      <div className="pet-info">
        <h2 className="pet-name">{pet.name}</h2>
        <p className="pet-behaviour">Behaviour: {pet.behaviour}</p>
        <p className="pet-type">Type: {pet.type}</p>
        <p className="pet-price">Price: ${pet.price}</p>
        <p className="pet-description">Description: {pet.description}</p>
      </div>
    </div>
  );
};

export default PetDetails;
