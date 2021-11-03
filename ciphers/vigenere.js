const caesar_utils = require("./caesar");

const [caesar] = caesar_utils;

function cipherSetter(index, key) {
  return key.charAt(index % key.length).charCodeAt(0)-97;
}

function vigenere(string, a) {
	let newStr = "";
  for (let i = 0; i < string.length; i ++) {
    newStr += caesar(string.charAt(i),cipherSetter(i,a))
  }

  return newStr;
}
