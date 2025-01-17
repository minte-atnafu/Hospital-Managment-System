const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true
  },
  feedback: {
    type: Object,
    required: true
  },
  improvement: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'Feedback' // Specify collection name as 'Feedback'
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
