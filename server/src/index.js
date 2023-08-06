const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow all origins. You can customize this based on your frontend's URL.

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});