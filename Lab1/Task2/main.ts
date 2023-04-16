//interface
interface IAccount{
    date_of_opening:Date;
    addCustomer: () => void;
    removeCustomer: () => void;
}

//abstract class
abstract class Account {
    acc_no: string;
    balance: number;
  
    abstract debitAmount(amount: number): void;
  
    abstract creditAmount(amount: number): void;
  
    abstract getBalance(): number;
  }


  class Saving_Account extends Account implements IAccount{
    date_of_opening: Date;
    min_balance: number;
//from interface
    addCustomer(): void {}
    removeCustomer(): void {}
//from abstraction
  debitAmount(amount: number): void {}
  creditAmount(amount: number): void {}
  getBalance(): number {
    return this.balance;
  } 
  }

  class Current_Account extends Account implements IAccount{
    date_of_opening: Date;
    interest_rate: number;
//from interface
    addCustomer(): void {}
    removeCustomer(): void {}
//from abstraction
  debitAmount(amount: number): void {}
  creditAmount(amount: number): void {}
  getBalance(): number {
    return this.balance;
  } 
  }