const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid');

const nodeAddress = uuid.v1().split('-').join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

app.post('/transaction', function (req, res) {
    const { amount, sender, recipient } = req.body;

    const blockIndex = bitcoin.createNewTransaction(amount, sender, recipient);
    res.json({ node: `Transaction will be added in block ${blockIndex}.` });
});

app.get('/mine', function (req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const prevBlockHash = lastBlock.hash;
    const currentBlockData = {
        transaction: bitcoin.pendingTransactions,
        index: lastBlock.index + 1,
    };

    const nonce = bitcoin.proofOfWork(prevBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(prevBlockHash, currentBlockData, nonce);

    bitcoin.createNewTransaction(12.5, '00', nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce, prevBlockHash, blockHash);
    res.json({
        note: 'New block mined successfully',
        block: newBlock,
    });
});

app.listen(3000, function () {
    console.log('Listening on port 3000....or am I?');
});
