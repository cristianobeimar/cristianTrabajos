const express = require('express')
const app = express();
const port = 1029;

app.get('/' , ( req, res) => {
    res.send('hola mundo');
})

app.get('/about' , ( req, res) => {
    res.send('sobre la compañia');
})

app.get('/contac' , ( req, res) => {
    res.send('contactanos');
}) 

app.listen(port, () => {
    console.log(`servidor escuchando en http://localhost:${port}`);
})