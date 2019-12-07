'use strict';

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    // Метод создает и возвращает объект транзакции.

    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            amount,
            type,
        };
    },

    // Метод отвечающий за добавление суммы к балансу.

    deposit(amount) {
        this.balance += amount;
        return this.transactions.push(
            this.createTransaction(amount, Transaction.DEPOSIT),
        );
    },

    // Метод отвечающий за снятие суммы с баланса.

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

    // Метод возвращает текущий баланс

    getBalance() {
        return this.balance;
    },

    // Метод ищет и возвращает объект транзации по id

    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;
            }
        }
    },

    // Метод возвращает количество средств

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
