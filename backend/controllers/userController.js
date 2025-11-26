import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";

// Modified createToken function to include the isAdmin status
const createToken = (id, isAdmin) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            // Use the modified createToken function
            const token = createToken(user._id, user.isAdmin);
            res.json({ success: true, token, isAdmin: user.isAdmin });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();

        const token = createToken(user._id, user.isAdmin); // Use the modified createToken function

        res.json({ success: true, token, isAdmin: user.isAdmin });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        if (!user.isAdmin) {
            return res.json({ success: false, message: "Access denied" });
        }

        // Use the modified createToken function
        const token = createToken(user._id, user.isAdmin);
        res.json({ success: true, token, isAdmin: user.isAdmin });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Route to get the user's profile
const getProfile = async (req, res) => {
    try {
        const userId = req.body.userId;
        const user = await userModel.findById(userId).select('-password');

        if (!user) {
            return res.json({ success: false, message: "User not found." });
        }

        res.json({ success: true, user: { name: user.name, email: user.email, isAdmin: user.isAdmin } });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Internal server error." });
    }
};

export { loginUser, registerUser, adminLogin, getProfile };