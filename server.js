const express = require("express");
const app = express();
const port = 3000;

const checkInput = require("./input_validator");

//import affine cipher utilities
const [affine, reverseAffine, affineKeyValidator] = require("./ciphers/affine");

app.get("/affine/encrypt/:string", (req, res) => {
  const { a, b } = req.query;

  console.log(req.params.string);
  console.log(checkInput(req.params.string));

  if (checkInput(req.params.string)) {
    if (affineKeyValidator(a)) {
      res.send({ text: affine(req.params.string, a, b) });
    }
  } else {
    res.send("Error: invalid characters used in message");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
