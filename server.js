const express = require("express");
const app = express();
const port = 3000;

const checkInput = require("./input_validator");

//import affine cipher utilities
const [affine, reverseAffine, affineKeyValidator] = require("./ciphers/affine");

app.get("/:cipher/:typereq/:string", (req, res) => {
  switch (req.params.cipher) {

    //AFFINE
    case "affine":
      //encryptions
      if (req.params.typereq == "encrypt") {
        //gathering keys
        const { a, b } = req.query;

        if (checkInput(req.params.string)) {
          if (affineKeyValidator(a,b)) {
            res.send({ text: affine(req.params.string, a, b), keys: a.concat(" ",b) });
          } else {
            res.send("Error: invalid characters used in key(s)");
          }
        } else {
          res.send("Error: invalid characters used in message");
        }
      }
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
