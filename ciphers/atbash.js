const mod_utils = require("./mod_utils");

function atbash(string) {
	let newStr = "";
	for (let i = 0; i < string.length; i ++) {
		newStr += String.fromCharCode(219 - string.charCodeAt(i));
	}

	return newStr;
}

