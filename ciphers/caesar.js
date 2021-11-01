const mod_utils = require("./mod_utils");

const [mod, modInverse] = mod_utils;

function caesar(string,a){
	newStr = "";
	for (let i = 0; i < string.length; i ++) {
		newStr += String.fromCharCode(mod((string.charCodeAt(i) - 97 + a), 26) + 97);
	}

	return newStr;
}

function reverseCaesar(string,a){
	newStr = "";
	for (let i = 0; i < string.length; i ++) {
		newStr += String.fromCharCode(mod((string.charCodeAt(i) - 97 - a), 26) + 97);
	}

	return newStr;
}

function affineKeyValidator(a) {
  return !isNaN(a);
}

module.exports = [caesar,reverseCaesar, affineKeyValidator];
