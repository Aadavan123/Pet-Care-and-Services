const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}

exports.postUsers = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            name,
            email,
            password
        });
        await user.save();
        res.status(200).json('User created successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json('Invalid Credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json('Invalid Credentials');
        }
        const token = jwt.sign({ user_id: user._id}, "secret_token", { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};
