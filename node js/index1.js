const express = require('express');
const app = express();
const port = 3000;

// Route for homepage
app.get('/', (req, res) => {
    res.send("Welcome to Homepage");
});

// Route for about page with query parameter
app.get('/about', (req, res) => {
    const username = req.query.name;
    res.send(`Hi, I am ${username}`);
});

// Route for search with query parameter
app.get('/search', (req, res) => {
    const query = req.query.search_query;
    res.send(`You are searching for ${query}`);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
