/* Prime Number Performance Check */

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function countPrimeNumbers() {
  let numPrime = 0;

  for (let i = 2; i <= 100; i++) {
    if (isPrime(i) === true) {
      numPrime += 1;
    }
  }

  return numPrime;
}

const t0 = performance.now();

for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

const t1 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
