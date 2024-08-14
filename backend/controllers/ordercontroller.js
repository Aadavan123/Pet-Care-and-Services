const Order = require('../models/ordermodel');


exports.createOrder = async (req, res) => {
    try {
        const { cartItems, totalPrice } = req.body;
    
        const newOrder = new Order({
          items: cartItems,
          totalAmount: totalPrice,
        });
    
        await newOrder.save();
        res.status(201).json(newOrder);
      } catch (error) {
        console.error('Failed to create order:', error);
        res.status(500).json({ message: 'Failed to create order' });
      }
};


exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};
