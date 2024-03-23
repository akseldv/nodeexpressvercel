const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 9001;

app.get('/', (req, res) => {

    res.send('Hello World!')

})

app.listen(port, () => {

    console.log(`Listening to port: ${port}`);

})