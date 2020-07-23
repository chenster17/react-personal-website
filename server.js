
const express = require('express');
const cors = require('cors');
const path = require('path');



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use(express.static('./client/build'));

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});