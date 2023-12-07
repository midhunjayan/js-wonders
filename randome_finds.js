1. Random string
// Generate a random string
const randomFunction = Math.random().toString(36).slice(2);

// randomString() // gi1qtdego0b
// randomString() // f3qixv40mot
// randomString() // eeelv1pm3ja

2. Uppercase
// uppercase the first character of each word in a string
const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

// uppercaseWords('hello world'); // 'Hello World'
