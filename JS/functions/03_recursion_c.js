

// 5! -> 5*4*3*2*1 = 120

function factorial(x) {
    if(x == 0 || x == 1) {
        return 1;
    }

    return x * factorial(x - 1);
    // 5 * 4 * 3 * 2 * 1
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));