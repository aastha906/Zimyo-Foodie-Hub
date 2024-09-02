const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

async function register(req, res) {
    const { username, email, password } = req.body;

    const existingUser = await User.getUserByEmail(email);
    if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userId = await User.createUser({ username, email, passwordHash });

    const token = jwt.sign({ id: userId, username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
}

async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.getUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
}

module.exports = { register, login };
