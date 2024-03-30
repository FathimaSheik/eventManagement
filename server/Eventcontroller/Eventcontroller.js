const Event = require("../models/event");

const createEvent = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const newEvent = new Event({
            title,
            description,
            date
        });
        await newEvent.save();
        res.status(201).json({ success: true, message: "Event created successfully" });
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ success: false, message: "Failed to create event" });
    }
};


module.exports = { createEvent };