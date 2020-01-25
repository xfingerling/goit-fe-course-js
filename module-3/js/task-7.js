'use strict';

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            amount,
            type,
        };
    },

    deposit(amount) {
        this.balance += amount;
        return this.transactions.push(
            this.createTransaction(amount, Transaction.DEPOSIT),
        );
    },

    withdraw(amount) {
        if (amount > this.balance) {
            alert('Недостаточно средств');
        } else {
            this.balance -= amount;
            return this.transactions.push(
                this.createTransaction(amount, Transaction.WITHDRAW),
            );
        }
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;
            }
        }
    },

    getTransactionTotal(type) {
        let total = 0;

        for (const transaction of this.transactions) {
            if (type === transaction.type) {
                total += transaction.amount;
            } else {
                continue;
            }
        }
        return total;
    },
};
