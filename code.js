class BankAccount {
    constructor(initialBalance) {
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. New balance: $${this.balance}`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
      } else {
        console.log("Insufficient funds or invalid withdrawal amount.");
      }
    }
  
    getBalance() {
      console.log(`Current balance: $${this.balance}`);
    }
  }
  
  const myAccount = new BankAccount(1000);
  myAccount.getBalance();
  myAccount.deposit(500);
  myAccount.withdraw(200);
  myAccount.getBalance();
  myAccount.withdraw(1500);
  