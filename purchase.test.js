const { createPurchase, updatePurchase, deletePurchase, getTotalDonation } = require('./purchase');

describe('Purchase functionality tests', () => {
    beforeEach(() => {
        // Reset purchases before each test
        purchases.length = 0;
    });

    test('Create a new purchase', () => {
        createPurchase('Item 1', 10.99, 2.5);

        expect(purchases.length).toBe(1);
        expect(purchases[0].name).toBe('Item 1');
        expect(purchases[0].amount).toBe(10.99);
        expect(purchases[0].donation).toBe('2.50');
    });

    test('Update an existing purchase', () => {
        createPurchase('Item 1', 10.99, 2.5);
        const purchaseId = purchases[0].id;

        updatePurchase(purchaseId, { name: 'Updated Item 1', amount: 15.99 });

        expect(purchases[0].name).toBe('Updated Item 1');
        expect(purchases[0].amount).toBe(15.99);
    });

    test('Delete an existing purchase', () => {
        createPurchase('Item 1', 10.99, 2.5);
        const purchaseId = purchases[0].id;

        deletePurchase(purchaseId);

        expect(purchases.length).toBe(0);
    });

    test('Calculate total donation', () => {
        createPurchase('Item 1', 10.99, 2.5);
        createPurchase('Item 2', 5.99, 1.5);

        const totalDonation = getTotalDonation();

        expect(totalDonation).toBe('4.00');
    });
});