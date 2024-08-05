const express = require("express");
const os = require("os");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.get("/type", (req, res) => {
  const nameOs = os.type();

  console.log(nameOs);

  res.send(nameOs);
});


app.get('/cpus', (req, res) => {
    const nameOs = os.cpus();

console.log(nameOs);

    res.send(nameOs);
})

app.get('/totalmem', (req, res) => {
    const nameOs = os.totalmem();

console.log(nameOs);

    res.send(nameOs);
})

app.get("/nombre", (req, res) => {
  res.send("Cristian obeimar yalanda yalanda ");
});
app.listen(port, () => {
  console.log(`express app listening on port ${port}`);
});
