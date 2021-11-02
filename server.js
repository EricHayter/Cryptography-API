const express = require("express");
const app = express();
const port = 3000;

const checkInput = require("./input_validator");

//import cipher utilities
const [affine, reverseAffine, affineKeyValidator] = require("./ciphers/affine");
const [caesar, reverseCaesar, caesarKeyValidator] = require("./ciphers/caesar");
const [atbash] = require("./ciphers/atbash");

app.get("/:cipher/:typereq/:string", (req, res) => {
	const { a, b } = req.query;

	switch (req.params.cipher) {
			//AFFINE
		case "affine":
			//gathering keys
			if (req.query.length < 2) {
				res.send("Error: missing key values");
			}

			//check to see if the string input is valid
			if (checkInput(req.params.string)) {
				//checks to see if the given keys are valid
				if (affineKeyValidator(a, b)) {
					//sends response based on the type of request
					if (req.params.typereq == "encrypt") {
						res.send({
							text: affine(req.params.string, parseInt(a), parseInt(b)),
							keys: a + " " + b,
						});
					} else if (req.params.typereq == "decrypt") {
						res.send({
							text: reverseAffine(req.params.string, parseInt(a), parseInt(b)),
							keys: a.concat(" ", b),
						});
					}
				} else {
					res.send("Error: invalid characters used in key(s)");
				}
			} else {
				res.send("Error: invalid characters used in message");
			}

			break;

			// CAESAR
		case "caesar":
			//gathering keys
			if (req.query.length < 1) {
				res.send("Error: missing key values");
			}

			//check to see if the string input is valid
			if (checkInput(req.params.string)) {
				//checks to see if the given keys are valid
				if (caesarKeyValidator(a)) {
					//sends response based on the type of request
					if (req.params.typereq == "encrypt") {
						res.send({
							text: caesar(req.params.string, parseInt(a)),
							keys: a,
						});
					} else if (req.params.typereq == "decrypt") {
						res.send({
							text: reverseCaesar(req.params.string, parseInt(a)),
							keys: a + " " + b,
						});
					}
				} else {
					res.send("Error: invalid characters used in key(s)");
				}
			} else {
				res.send("Error: invalid characters used in message");
			}

			break;

			// ATBASH
		case "atbash":
			//check to see if the string input is valid
			if (checkInput(req.params.string)) {

				//sends response based on the type of request
				if (req.params.typereq == "encrypt" || req.params.typereq == "decrypt") {
					res.send({
						text: atbash(req.params.string),
						keys: "NA",
					});
				}

			} else {
				res.send("Error: invalid characters used in message");
			}

			break;


	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
