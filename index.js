const express = require('express');
const dotenv = require('dotenv');
const cors=require('cors')
const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())
// Load environment variables from .env file
dotenv.config();


const {sendEmailSearchedBreed,sendEmailSubscribedUsers}=require('./sendMail')
// Route to send email on stock out
app.post('/send-email-stock-available', async (req, res) => {
  const { email, subject,html} = req.body;
  sendEmailSearchedBreed(email, subject,html)
  res.send("Emailsent")
});

app.post('/send-email-subscribed-breed', async (req, res) => {
  const { email, subject,html} = req.body;
  sendEmailSubscribedUsers(email, subject,html)
  res.send("Emailsent to the Subscribed Users")
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
