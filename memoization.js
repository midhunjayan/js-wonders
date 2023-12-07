const memoizedFactorial = (function () {
  const cache = {};

  return function factorial(n) {
    if (n in cache) return cache[n];
    if (n === 0 || n === 1) return 1;

    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
})();

// Example usage
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(8)); // Output: 40320
