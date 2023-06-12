const { purchases } = require('./purchase');
const chalk = require('chalk');

function displayIndex() {
    console.log(chalk.bold('Purchases:'));
    purchases.forEach((purchase) => {
        console.log(`ID: ${chalk.yellow(purchase.id)}, Name: ${chalk.green(purchase.name)}`);
    });
}

module.exports = displayIndex;