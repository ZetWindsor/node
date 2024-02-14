`Exercise 2: Explore with the Node.js REPL

Use the Node.js REPL to list the methods provided by the Node.js core crypto module. Use one of these methods to generate a random ID.`

const crypto = require('crypto');

function generateRandomId(length = 16) {
  const randomBytes = crypto.randomBytes(length);
  const randomId = randomBytes.toString('hex');
  return randomId;
}

// Example usage: Generate a random ID with default length 16
const myRandomId = generateRandomId();
console.log(myRandomId);