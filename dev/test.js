// TODO: setup proper automated JEST tests

const Blockchain = require('./blockchain');

// const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2389, '9879779KHJSFG', '879AF8D97ASDF');
// bitcoin.createNewBlock(111, '9gasfg9KHJSFG', '879asgdfg97ASDF');
// bitcoin.createNewBlock(99999, '9879779ghfdhfgjjkSFG', '879htesrh97ASDF');

// console.log(bitcoin);

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, '9879779KHJSFG', '879AF8D97ASDF');
bitcoin.createNewTransaction(100, 'senderAddress', 'recipientAddress');

bitcoin.createNewBlock(13131, bitcoin.getLastBlock().hash, 'dfsdf');

bitcoin.createNewTransaction(50, 'senderAddress', 'recipientAddress');
bitcoin.createNewTransaction(300, 'senderAddress', 'recipientAddress');
bitcoin.createNewTransaction(2000, 'senderAddress', 'recipientAddress');

bitcoin.createNewBlock(6969, bitcoin.getLastBlock().hash, 'sadfadsf');

console.log(bitcoin);
