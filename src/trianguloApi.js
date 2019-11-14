const express = require("express");
const triangulo = require("./triangulo");

const app = express();

app.use(express.json());

app.get("/triangulo", (req, res) => {
  let data = req.query;

  // checks for any missing parameter
  if (!data.lado1 || !data.lado2 || !data.lado3)
    res.json({ status: "error", result: "missing parameter" });

  trig = new triangulo(parseInt(data.lado1), parseInt(data.lado2), parseInt(data.lado3));
  
  // checks if valid
  if (!trig.valido()) res.json({ status: "error", result: "invalid triangle" });

  res.json({ status: "success", result: trig.tipo() });
});

const PORT = process.env.PORT || 3000;

//app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
