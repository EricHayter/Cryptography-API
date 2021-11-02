const mod_utils = require("./mod_utils");

function atbash(string) {
	let newStr = "";
	for (let i = 0; i < string.length; i ++) {
		newStr += String.fromCharCode(219 - string.charCodeAt(i));
	}

	return newStr;
}

// There is no need to make a reverse atbash because you can just decrypt the message by calling 
// the atbash cipher again.

module.exports = [atbash];
