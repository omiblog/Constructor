function BankAccount(customerName, balance = 0 ){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance; 
    this.deposit = function(amount){
        this.balance = this.balance + amount; 
    }
    this.withdraw = (amount) => {
        this.balance -= amount; 
    }
}

 //const rakeshAccount = new BankAccount("Rakesh K", 1000);
 //const joanAccount = new BankAccount("Joan K", 2000);
 //rakeshAccount.deposit(5000);
 //rakeshAccount.withdraw(5000);
 //joanAccount.deposit(1000);
 //joanAccount.withdraw(1000);
 //console.log(rakeshAccount, joanAccount);

 //*==================================
const accounts = [];
 const accountForm = document.querySelector('#accountForm');
 const customerName = document.querySelector('#customerName');
 const balance = document.querySelector('#balance');
 //================================
 const depositForm = document.querySelector('#depositForm');
 const accountnumber = document.querySelector('#accountnumber');
 const amount = document.querySelector('#amount');

 accountForm.addEventListener('submit', (e) => {
     e.preventDefault();
     const account = new BankAccount(customerName.value, +balance.value);
     accounts.push(account);
     console.log(accounts);
     
 });

 depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find((accounts) => accounts.accountnumber === +accountnumber.value);
    account.deposit(+amount.value);
    console.log(accounts);
    
});