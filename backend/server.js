 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const routes = require('./routes/routes'); // Ensure this is correctly pointing to your routes module

 const app = express();

// // Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
 app.use(cors());

// // Use the routes
 app.use('/api', routes);  // Ensure 'routes' is a valid Router object

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 });

