// This function returns the next prime number
// after the number given as its only argument
function next_prime(from) {
  // We are only interested in the positive primes,
  // so we will consider the number 2 as the next
  // prime after any number less than two.
  if (from < 2) {
    return 2;
  }
  // The number 2 is the only even positive prime,
  // so it will be easier to treat it separately.
  if (from == 2) {
    return 3;
  }
  // Decrement "from" if it is an even number
  if (from % 2 == 0) {
    from--;
  }
  // Start searching for primes greater then 3.
  // The prime candidate is the next odd number
  let candidate = from + 2;
  // "candidate" is an odd number, so the loop will
  // try only the odd factors, starting with 3
  for (let factor = 3; factor < candidate; factor = factor + 2) {
    if (candidate % factor == 0) {
      // The remainder is zero, so the candidate is not prime.
      // Call the next_prime function recursively, this time
      // using the failed candidate as the argument.
      return next_prime(candidate);
    }
  }
  // "candidate" is not divisible by any integer factor other
  // than 1 and itself, therefore it is a prime number.
  return candidate;
}
let from = 1024;
console.log("The next prime after", from, "is", next_prime(from));
