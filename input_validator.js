//checks to see if the input is a lowercase letter between a-z.
module.exports = function checkInput(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      return true;
    }
  }

  return false;
};
