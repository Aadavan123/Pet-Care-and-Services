import React, { useState } from 'react';
import PetCard from '../components/Petcard';
import Pet from '../Petdata';
import SearchBar1 from '../components/Searchbar1'; 
import '../assets/Pets.css';

const Pets = () => {
  const [filteredPets, setFilteredPets] = useState(Pet);

  return (
    <div className="pets-container">
      <SearchBar1 items={Pet} setFilteredItems={setFilteredPets} />
      <div className="pet-list">
        {filteredPets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Pets;
