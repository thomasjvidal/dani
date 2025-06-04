const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor da Dra. Daniela está no ar!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
