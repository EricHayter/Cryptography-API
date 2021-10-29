const express = require("express");
const app = express();
const port = 3000;

const checkInput = require("./input_validator") 

//import affine utilities
const [affine, reverseAffine, affineKeyValidator] = require("./ciphers/affine");

app.get("/affine/encrypt/:string/:key", (req, res) => {
  if (checkInput(req.params.string)) {
    let key = JSON.parse("[" + req.params.key + "]");
    if (affineKeyValidator(key[0])) {
      console.log(key[0])
      console.log(key[1])

      res.send({ text: affine(req.params.string, key[0], key[1])});
    }
    
  }

  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
