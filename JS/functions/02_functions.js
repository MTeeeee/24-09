// A naive prime number tester
// The number we want to evaluate
let candidate = 231;
// Auxiliary variable
let is_prime = true;
// Start with the lowest prime number after 1
let factor = 2;
// Keeps evaluating while factor is less than the candidate
while (factor < candidate) {

  if (candidate % factor == 0) {
    // The remainder is zero, so the candidate is not prime
    is_prime = false;
    break;
  }
  // The next number that will divide the candidate
  factor++;
}
// Display the result in the console window
if (is_prime) {
  console.log(candidate, "is prime");
} else {
  console.log(candidate, "is not prime");
}
