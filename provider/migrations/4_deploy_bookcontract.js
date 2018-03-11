const config = require('../config.json'),
		ContractNameService = artifacts.require('./ContractNameService.sol'),
        BookContract_v1 = artifacts.require('./BookContract_v1.sol'),
        BookContractLogic_v1 = artifacts.require('./BookContractLogic_v1.sol');
      

module.exports = function(deployer) {
    deployer.deploy(BookContractLogic_v1, ContractNameService.address , config.gmoCns).then(function(){
        return deployer.deploy(BookContract_v1, ContractNameService.address, BookContractLogic_v1.address);
    }).then(function() {
        return ContractNameService.deployed();
    }).then(function(instance) {
        return instance.setContract('BookContract', 1, BookContract_v1.address, BookContractLogic_v1.address);
    });
}



