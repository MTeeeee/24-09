// A naive prime number tester function
function test_prime(candidate)
{
// Auxiliary variable
let is_prime = true;
// Start with the lowest prime number after 1
let factor = 2;
// Keeps evaluating while factor is less than the candidate
while ( factor < candidate )
{
if ( candidate % factor == 0 )
{
// The remainder is zero, so the candidate is not prime
is_prime = false;
break;
}
// The next number that will divide the candidate
factor++;
}
// Send the answer back
return is_prime;
}

// The number we want to evaluate
let candidate = 231;
// Display the result in the console window
if ( test_prime(candidate) )
{
console.log(candidate, "is prime");
}
else
{
console.log(candidate, "is not prime");
}