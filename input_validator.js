module.exports = function checkInput(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) < 97 && string.charCodeAt(i) > 122) {
            return false;
        }
    }

    return true;
}