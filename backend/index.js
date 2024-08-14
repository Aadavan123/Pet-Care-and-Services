const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./Routes/orderroute');
const userRoutes = require('./Routes/UserRoutes');

const app = express();


mongoose.connect('mongodb://localhost:27017/Pet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());


app.use('/api', orderRoutes);
app.use('/users1', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
