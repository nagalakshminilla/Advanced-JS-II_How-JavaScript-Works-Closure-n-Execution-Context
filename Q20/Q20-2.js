function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    let transactionHistory = [];
    
    function addTransaction(type, amount, success = true) {
        transactionHistory.push({
            type: type,
            amount: amount,
            balance: balance,
            timestamp: new Date().toISOString(),
            success: success
        });
    }
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                addTransaction('deposit', amount);
                console.log(`Deposited: ${amount}. New balance: ${balance}`);
                return true;
            } else {
                console.log("Deposit amount must be positive");
                addTransaction('deposit', amount, false);
                return false;
            }
        },
        
        withdraw: function(amount) {
            if (amount <= 0) {
                console.log("Withdrawal amount must be positive");
                addTransaction('withdraw', amount, false);
                return false;
            }
            
            if (amount <= balance) {
                balance -= amount;
                addTransaction('withdraw', amount);
                console.log(`Withdrawn: ${amount}. New balance: ${balance}`);
                return true;
            } else {
                console.log(`Insufficient balance. Current balance: ${balance}`);
                addTransaction('withdraw', amount, false);
                return false;
            }
        },
        
        getBalance: function() {
            return balance;
        },
        
        getTransactionHistory: function() {
            return [...transactionHistory];
        },
        
        getAccountSummary: function() {
            return {
                currentBalance: balance,
                totalTransactions: transactionHistory.length,
                successfulTransactions: transactionHistory.filter(t => t.success).length
            };
        }
    };
}

console.log("=== Bank Account Example ===");
const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);
account.withdraw(2000);

console.log("\n=== Privacy Demonstration ===");
console.log("Direct access to balance:", account.balance);
console.log("Using getBalance method:", account.getBalance());

console.log("\n=== Transaction History ===");
const history = account.getTransactionHistory();
history.forEach(transaction => {
    console.log(`${transaction.timestamp}: ${transaction.type} $${transaction.amount} - ${transaction.success ? 'Success' : 'Failed'} (Balance: $${transaction.balance})`);
});

console.log("\n=== Account Summary ===");
console.log(account.getAccountSummary());