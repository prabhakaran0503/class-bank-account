let n=parseInt(prompt("Enter your deposit amount"));
let n1=parseInt(prompt("Enter the withdraw amount"))

class BankAccound{
    constructor( account_number,balance){
        this.account_number=account_number,
        this.balance=balance
        
      
    }
    deposit(amt){
       
       let ans=this.balance+amt
       document.write(`Your balance is ${this.balance} <br>`);
       document.write(`The deposit amount is ${amt} your total balance amount is ${ans} <br>`);
       this.balance=ans
    }
    withdraw_money(amunt){
        
      let ans=this.balance-amunt
    //   console.log(ans);
        document.write(`The witdraw amount is ${amunt} your total balance amount is ${ans}`)
    }
}
let res=new BankAccound(122134,500);
res.deposit(n);
res.withdraw_money(n1)
