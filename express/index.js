const express = require('express')
const os = require('os');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.get('/type', (req, res) => {
    const nameOs = os.type();

console.log(nameOs);

    res.send(type)
})


app.get('/nombre', (req, res) => {
    res.send('Cristian obeimar yalanda yalanda ')
})
app.listen(port , () => {
    console.log(`express app listening on port ${port}`)
})



