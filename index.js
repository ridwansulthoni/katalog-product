const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World Kak');
})

app.post('/product', (req, res) => {
    console.log({ requestFromOutside: req.body});
    res.send('Data berhasil dibuat');
})
app.listen(port, ()=> {
    console.log(`Running on port ${port}`);
})