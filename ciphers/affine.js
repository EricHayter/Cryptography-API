const mod_utils = require("./mod_utils")

const [mod,modInverse] = mod_utils;

function Affine(string, a, b) {
    var newStr = ""
    for (let i = 0; i < string.length; i++) {
        newStr += String.fromCharCode(mod((a*(string.charCodeAt(i) - 97) + b), 26) + 97)
    }
    return newStr;
}

function reverseAffine(string, a, b) {
    let newStr = ""
    for (let i = 0; i < string.length; i++) {
        newStr += String.fromCharCode(mod(modInverse(a,26)*(string.charCodeAt(i) -97 - b), 26) + 97);
    }
    return newStr;
}

module.exports = [Affine,reverseAffine]