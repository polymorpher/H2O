var HarmonyERC20 = artifacts.require('OTPTest')

module.exports = function (deployer, network, accounts) {
  const name = 'OTPTest'
  const symbol = 'OTPTest'
  const amount = 1000000
  const tokens = web3.utils.toWei(amount.toString(), 'ether')

  deployer.then(function () {
    return deployer.deploy(HarmonyERC20, name, symbol, tokens).then(function () {
    })
  })
}
