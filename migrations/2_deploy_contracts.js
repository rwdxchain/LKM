const LookeiToken = artifacts.require("./LookeiToken.sol");

module.exports = function (deployer, network, accounts) {
		console.log(`Accounts: ${accounts}`);

		let lookeiToken = null;

		const owner = accounts[0];
		const admin = accounts[1];

		return deployer.deploy(
			LookeiToken, admin,  { from: owner }
		).then(() => {
			return LookeiToken.deployed().then(instance => {
				lookeiToken = instance;
				console.log(`LookeiToken deployed at \x1b[36m${instance.address}\x1b[0m`)
			});
		});
};		
