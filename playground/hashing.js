const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


var data ={
    id: 13
}

var token = jwt.sign(data, 'dinamo');
console.log(token);

var decoded = jwt.verify(token, 'dnamo');
console.log('JWT Verify:   ',decoded);
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// var data ={
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'dinamo').toString()
// }

// console.log(JSON.stringify(token, undefined, 2));

// var resaultHash = SHA256(JSON.stringify(token.data) + 'dinamo').toString();

// if(resaultHash === token.hash){
//     console.log(`Data is correct!!!`);
// }else{
//     console.log('Data was changed');
// }

