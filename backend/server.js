import app from './app.js';
import mongoose from 'mongoose';

const port = process.env.PORT || 5010;
const url = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(url, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(error => {
  console.error('Error connecting to MongoDB', error.message);
});

export default app;