class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
      document.write(`Amount $${amount} deposited into account ${this.accountNumber}.`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        document.write(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
      } else {
        document.write(`Insufficient balance in account ${this.accountNumber}.`);
      }
    }
  
    getBalance() {
        document.write(`Account ${this.accountNumber} balance: $${this.balance}`);
    }
  }
  
  // Create multiple instances of the BankAccount class
  const account1 = new BankAccount('db-0147', 'Sabbir Hasan', 5000);
  const account2 = new BankAccount('db-0148', 'Nazmush Sakib', 7000);
  
  // Transactions on the bank accounts
  account1.getBalance(); 
  
  // Account db-0147 balance: $5000



  account2.getBalance(); 
  
  // Account db-0148 balance: $7000
  
  account1.deposit(1200); 
  
// Amount $1200 deposited into account db-0147.
  account1.getBalance(); 
  
  // Account db-0147 balance: $6200
  
  account1.withdraw(1000); 
  
  // Amount $1000 withdrawn from account db-0147.
  account1.getBalance(); 
  // Account db-0147 balance: $5200