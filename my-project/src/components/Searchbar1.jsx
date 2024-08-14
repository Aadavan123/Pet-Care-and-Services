import React from 'react';
import '../assets/Searchbar1.css';

const SearchBar1 = ({ setFilteredItems, items }) => {
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredItems = items.filter(item => 
      item.name.toLowerCase().includes(query)
    );
    setFilteredItems(filteredItems);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar1;
