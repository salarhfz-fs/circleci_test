require('dotenv').config();

console.log(process.env.TEST_VAR === 'WORKING' ? 'You win' : 'You lose');
console.log(process.env.VAR_TEST === 'WORKING' ? 'Another win' : 'Another lose');
