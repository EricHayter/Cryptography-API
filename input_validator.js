// export default function checkInput(string) {
//     for (let i = 0; i < string.length; i++) {
//         if (string.charCodeAt(i) <= 97) {
//             return false
//         }
//     }
// }

export default function checkInput(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) < 97 && string.charCodeAt(i) > 122) {
            return false;
        }
    }

    return true;
}

console.log(checkInput("z"))

console.log("a".charCodeAt(0))
console.log("z".charCodeAt(0))