const Config = require('config'),
    Web3 = require('web3'),
    Promise = require('bluebird'),
    Warn = require('../lib/warn');

const web3 = new Web3(new Web3.providers.HttpProvider(Config.parity.provider));
Promise.promisifyAll(web3.eth);

const Eth = function(req) {
    this.req = req;
};

Eth.prototype.sendTransaction = function(tx) {
    const _this = this;

    _this.req.timestampStart('sendTransaction');
    return web3.eth.sendTransactionAsync(tx).then(function(txHash) {
        _this.req.log.txHash = txHash;
        return Promise.resolve(txHash);
    }).finally(function() {
        _this.req.timestampStop('sendTransaction');
    });
};

Eth.prototype.estimateGas = function(tx) {
    const _this = this;

    _this.req.timestampStart('estimateGas');
    return web3.eth.estimateGasAsync(tx).then(function(gas) {
        _this.req.log.estimateGas = gas;
        return Promise.resolve(gas);
    }).catch(function(err) {
        if (err.message !== 'Transaction execution error.') return Promise.reject(err);
        return Promise.reject(new Warn('Throw contract exception', 461));
    }).finally(function() {
        _this.req.timestampStop('estimateGas');
    });
};

Eth.prototype.getReceipt = function(txHash) {
    const _this = this;

    _this.req.timestampStart('getReceipt');
    return web3.eth.getTransactionReceiptAsync(txHash).then(function(receipt) {
        _this.req.log.txReceipt = receipt ? receipt : null;
        return Promise.resolve(receipt);
    }).finally(function() {
        _this.req.timestampStop('getReceipt');
    });
};

Eth.prototype.call = function(callObject) {
    const _this = this;

    _this.req.timestampStart('call');
    return web3.eth.callAsync(callObject).then(function(result) {
        _this.req.log.callResult = result;
        return Promise.resolve(result);
    }).finally(function() {
        _this.req.timestampStop('call');
    });
};

module.exports = Eth;
