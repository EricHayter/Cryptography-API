function mod(n, m) {
  return ((n % m) + m) % m;
}

function modInverse(a, b) {
  for (let x = 1; x < b; x++) {
    if (mod(mod(a, b) * mod(x, b), b) == 1) {
      return x;
    }
  }
}

module.exports = [mod, modInverse];
