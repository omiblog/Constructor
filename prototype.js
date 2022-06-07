function BankAccount(customerName, balance = 0 ){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance; 

}
const rakeshAccount = new BankAccount("Rakesh K");

BankAccount.prototype.deposit = function(amount){
    this.balance = this.balance + amount; 
}
rakeshAccount.deposit(3000);
console.log(rakeshAccount);
