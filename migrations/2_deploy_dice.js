var Dice = artifacts.require("./Dice.sol");

module.exports = function (deployer) {
  deployer.deploy(Dice, web3.utils.toWei('0.1', 'ether'), {
    gas: 3000000
  });
};
