const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      id: String,
      name: String,
      price: Number,
      image_url: String,
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
    default: function() {

      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 7);
      return deliveryDate;
    },
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
