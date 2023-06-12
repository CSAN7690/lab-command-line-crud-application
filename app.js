const { v4: uuidv4 } = require('uuid');
const chalk = require('chalk');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const donations = [];

function createDonation() {
    rl.question('Enter the amount of the purchase: ', (amount) => {
        const roundedAmount = Math.ceil(parseFloat(amount));
        const donation = {
            id: uuidv4(),
            amount: roundedAmount,
        };

        donations.push(donation);

        console.log(chalk.green('Donation created successfully!'));
        showMenu();
    });
}
// `Math.cell()` is used to round 🆙 to the purchase amount entered by the user to the nearest whole #️⃣

function readDonations() {
    if (donations.length === 0) {
        console.log(chalk.yellow('No donations available.'));
    } else {
        console.log(chalk.bold('Donations:'));
        donations.forEach((donation) => {
            console.log(`ID: ${donation.id}, Amount: $${donation.amount}`);
        });
    }

    showMenu();
}

function updateDonation() {
    if (donations.length === 0) {
        console.log(chalk.yellow('No donations available.'));
        showMenu();
    } else {
        rl.question('Enter the ID of the donation to update: ', (id) => {
            const donation = donations.find((donation) => donation.id === id);

            if (!donation) {
                console.log(chalk.red('Donation not found.'));
                showMenu();
            } else {
                rl.question('Enter the new amount: ', (amount) => {
                    donation.amount = parseFloat(amount);
                    console.log(chalk.green('Donation updated successfully!'));
                    showMenu();
                });
            }
        });
    }
}

function deleteDonation() {
    if (donations.length === 0) {
        console.log(chalk.yellow('No donations available.'));
        showMenu();
    } else {
        rl.question('Enter the ID of the donation to delete: ', (id) => {
            const index = donations.findIndex((donation) => donation.id === id);

            if (index === -1) {
                console.log(chalk.red('Donation not found.'));
                showMenu();
            } else {
                donations.splice(index, 1);
                console.log(chalk.green('Donation deleted successfully!'));
                showMenu();
            }
        });
    }
}

function showMenu() {
    console.log(chalk.bold('\nMenu:'));
    console.log('1. Create Donation');
    console.log('2. Read Donations');
    console.log('3. Update Donation');
    console.log('4. Delete Donation');
    console.log('5. Exit');

    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                createDonation();
                break;
            case '2':
                readDonations();
                break;
            case '3':
                updateDonation();
                break;
            case '4':
                deleteDonation();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log(chalk.red('Invalid choice.'));
                showMenu();
        }
    });
}

console.log(chalk.bold('Welcome to the Donation App!'));
showMenu();