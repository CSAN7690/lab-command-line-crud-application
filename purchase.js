const { nanoid } = require('nanoid');

const purchases = [];

function createPurchase(name, amount, donation) {
    const id = nanoid();
    const roundedDonation = parseFloat(donation).toFixed(2);

    const purchase = {
        id,
        name,
        amount,
        donation: roundedDonation,
    };

    purchases.push(purchase);
}

function updatePurchase(id, updatedPurchase) {
    const index = purchases.findIndex((purchase) => purchase.id === id);

    if (index !== -1) {
        purchases[index] = { ...purchases[index], ...updatedPurchase };
    }
}

function deletePurchase(id) {
    const index = purchases.findIndex((purchase) => purchase.id === id);

    if (index !== -1) {
        purchases.splice(index, 1);
    }
}

function getTotalDonation() {
    let total = 0;

    purchases.forEach((purchase) => {
        total += parseFloat(purchase.donation);
    });

    return total.toFixed(2);
}

module.exports = {
    createPurchase,
    updatePurchase,
    deletePurchase,
    getTotalDonation,
};