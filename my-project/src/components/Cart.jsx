import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import '../assets/Cart.css';
import { removeItemFromCart, clearCart } from '../redux/CartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const closeModal = async () => {
    setShowModal(false);
    try {
      console.log('Cart Items:', cartItems);
      console.log('Total Price:', totalPrice);

      await axios.post('http://localhost:3000/api/orders', { cartItems, totalPrice });
      
      dispatch(clearCart());

      toast.success('Checkout Success',{
        position: "bottom-right",
        autoClose: 1000,
        theme: 'dark',
    }); 
    } catch (error) {
      console.error('Error during checkout', error);
      toast.error('Checkout failed. Please try again.');
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
    toast.error('Item removed from cart');
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.error('Cart cleared');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <h3>Sorry, Your Cart is Empty</h3>
          <p>Kindly add items to checkout.</p>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image_url} alt={item.name} className="item-image" />
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price"> : ${item.price}</span>
                  <div className='item-details'>
                  <button 
                    onClick={() => handleRemoveItem(item.id)} 
                    className="remove-button"
                  >
                    Remove
                  </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <button 
              onClick={handleClearCart} 
              className="clear-cart-button"
            >
              Clear Cart
            </button>
            <div className="total-price">
              <span>Total Payable: ${totalPrice.toFixed(2)}</span>
              <button className='checkout' onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </>
      )}

      {showModal && (
        <div className="checkout-modal">
          <div className="modal-content">
            <h3>Checkout Summary</h3>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            <p><strong>Total Payable:</strong> ${totalPrice.toFixed(2)}</p>
            <button onClick={closeModal} className="close-modal-button">Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
