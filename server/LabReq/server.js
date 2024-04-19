const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const labProcessRoutes = require('./labProcessRoutes');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware
app.use(cors()); // Add this line to enable CORS
app.use(bodyParser.json()); 

// Routes
app.use('/api', labProcessRoutes);

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
