const { purchases } = require('./purchase');
const chalk = require('chalk');

function displayPurchaseDetails(id) {
    const purchase = purchases.find((purchase) => purchase.id === id);

    if (purchase) {
        console.log(chalk.bold('Purchase Details:'));
        console.log(chalk.yellow(`ID: ${purchase.id}`));
        console.log(chalk.green(`Name: ${purchase.name}`));
        console.log(chalk.cyan(`Amount: $${purchase.amount}`));
        console.log(chalk.magenta(`Donation: $${purchase.donation}`));
    } else {
        console.log(chalk.red('Purchase not found.'));
    }
}

module.exports = displayPurchaseDetails;