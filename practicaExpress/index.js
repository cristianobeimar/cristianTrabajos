const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

let datacache = null;
app.get("/store", async (req, res) => {
  try {
    const response = await axios.get("URL_API");
    datacache = response.data;

    res.send("datos obtenidos y almacenados en memoria");
  } catch (error) {
    console.error(error);
    res.status(500).send("error al optener los datos");
  }
});
app.get("/get-data", (req, res) => {
  datacache
    ? res.json(datacache)
    : res.status(404).send("no hay datos almacenados");
});

app.listen(() => {
  console.log(`servidor http://localhost:${port}`);
});
