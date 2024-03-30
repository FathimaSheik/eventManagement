const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
    
    const { name, email, phone, password } = req.body;
    
    try {
        
        const newUser = new User({
            name,
            email,
            phone,
            password
        });

        
        await newUser.save();

        
        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
       
        console.error("Error registering user:", error);
        res.status(500).json({ success: false, message: "Registration failed" });
    }
});

router.post("/login", async (req, res) => {
   
    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email });

        
        if (!user || user.password !== password) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

  
        res.status(200).json({ success: true, message: "Login successful", user });
    } catch (error) {
       
        console.error("Error logging in:", error);
        res.status(500).json({ success: false, message: "Login failed" });
    }
});

module.exports = router;