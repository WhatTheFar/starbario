require('dotenv').config();

const app = require('./read/index.js');

app.listen(3000,() => {
    console.log('Listening on port 3000');
});