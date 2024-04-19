const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const Feedback = require('./feedbackModel');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST route to save feedback
app.post('/submit-feedback', async (req, res) => {
  try {
    console.log("Received feedback data:", req.body);
    const { department, feedback, improvement } = req.body;

    const newFeedback = new Feedback({
      department,
      feedback,
      improvement,
    });

    const savedFeedback = await newFeedback.save();

    console.log("Saved feedback:", savedFeedback);

    res.status(200).json({ message: 'Feedback submitted successfully', data: savedFeedback });

  } catch (error) {
    console.error("Error in try-catch:", error);
    res.status(500).json({ message: 'Failed to submit feedback', error: error.message });
  }
});

// Define server port
const PORT = 3002;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
