import {React,useState} from 'react';
import { useDispatch } from 'react-redux';
import ServiceCard from '../components/ServiceCard';
import Service from '../Service';
import SearchBar1 from '../components/Searchbar1';
import { addItemToCart } from '../redux/CartSlice'; 
import '../assets/Service.css'; 

const Services = () => {
  const dispatch = useDispatch();
  const [filteredServices, setFilteredServices] = useState(Service);

  const handleAddToCart = (service) => {
    dispatch(addItemToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      image_url: service.image_url,
      type: 'service' 
    }));
  };

  return (
    <div className="services-container">
      <SearchBar1 items={Service} setFilteredItems={setFilteredServices} />
      <div className="service-list">
        {filteredServices.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onAddToCart={() => handleAddToCart(service)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
