const express = require("express");

const app = express();

app.use(express.json());

app.get("/converterTemperatura", (req, res) => {
  let data = req.query;

  // checks for any missing parameter
  if (!data.de || !data.para || !data.valor)
    res.json({ status: "error", result: "missing parameter" });

  // js is stupid, we gotta say that our value is a float instead of a string
  data.valor = parseFloat(data.valor, 10);

  // returns the same value if we're not converting
  if (data.de == data.para) res.json({ status: "success", result: data.valor });

  // actual convertions
  if (data.de == "C") {
    if (data.para == "K")
      res.json({ status: "success", result: data.valor + 273.15 });
    if (data.para == "F")
      res.json({ status: "success", result: (data.valor * 9) / 5 + 32 });
  }

  if (data.de == "K") {
    if (data.para == "C")
      res.json({ status: "success", result: data.valor - 273.15 });
    if (data.para == "F")
      res.json({
        status: "success",
        result: ((data.valor - 273.15) * 9) / 5 + 32
      });
  }

  if (data.de == "F") {
    if (data.para == "K")
      res.json({
        status: "success",
        result: ((data.valor - 32) * 5) / 9 + 273.15
      });
    if (data.para == "C")
      res.json({ status: "success", result: ((data.valor - 32) * 5) / 9 });
  }
});

const PORT = process.env.PORT || 3000;

//app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
