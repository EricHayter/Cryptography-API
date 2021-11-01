const mod_utils = require("./mod_utils");

const [mod, modInverse] = mod_utils;

function affine(string, a, b) {
  var newStr = "";
  for (let i = 0; i < string.length; i++) {
    newStr += String.fromCharCode(
      mod(a * (string.charCodeAt(i) - 97) + b, 26) + 97
    );
  }
  return newStr;
}

function reverseAffine(string, a, b) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    newStr += String.fromCharCode(
      mod(modInverse(a, 26) * (string.charCodeAt(i) - 97 - b), 26) + 97
    );
  }
  return newStr;
}

function affineKeyValidator(a) {
  if (a < 1 & a > -1) {
    return false
  }

  return true;
}

module.exports = [affine, reverseAffine, affineKeyValidator];
