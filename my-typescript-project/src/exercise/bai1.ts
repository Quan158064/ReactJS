// Bước 1: Định nghĩa class BankAccount
class BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    //Tạo constructor
    constructor(accountNumber: number, accountHolder: string, balance: number = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
}

// Định nghĩa interface IBankAccountManager
interface IBankAccountManager {
    createAccount(account: BankAccount): void; // Hàm nhận bào đối tượng BankAccount
    closeAccount(accountNumber: number): void;
    getAccountByNumber(accountNumber: number): BankAccount | undefined;
    listAllAccounts(): BankAccount[];
    deposit(accountNumber: number, amount: number): void;
    withdraw(accountNumber: number, amount: number): void;
    getAccountHolderAndBalance(accountNumber: number): Pick<BankAccount, 'accountHolder' | 'balance'> | undefined;
    getAccountWithoutBalance(accountNumber: number): Omit<BankAccount, 'balance'> | undefined;
    updateAccount(accountNumber: number, updatedInfo: Partial<BankAccount>): void;
}

// Implement interface IBankAccountManager
class BankAccountManager implements IBankAccountManager {
    private accounts: BankAccount[] = [];

    createAccount(account: BankAccount): void {
        this.accounts.push(account);
    }

    closeAccount(accountNumber: number): void {
        this.accounts = this.accounts.filter(account => account.accountNumber !== accountNumber);
    }

    getAccountByNumber(accountNumber: number): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    listAllAccounts(): BankAccount[] {
        return this.accounts;
    }

    deposit(accountNumber: number, amount: number): void {
        const account = this.getAccountByNumber(accountNumber);
        if (account) {
            if (amount > 0) {
                account.balance += amount;
            } else {
                throw new Error("Amount to deposit should be greater than zero");
            }
        } else {
            throw new Error("Account not found");
        }
    }

    withdraw(accountNumber: number, amount: number): void {
        const account = this.getAccountByNumber(accountNumber);
        if (account) {
            if (amount > 0 && account.balance >= amount) {
                account.balance -= amount;
            } else {
                throw new Error("Insufficient balance or invalid amount");
            }
        } else {
            throw new Error("Account not found");
        }
    }

    getAccountHolderAndBalance(accountNumber: number): Pick<BankAccount, 'accountHolder' | 'balance'> | undefined {
        const account = this.getAccountByNumber(accountNumber);
        if (account) {
            return { accountHolder: account.accountHolder, balance: account.balance };
        }
        return undefined;
    }

    getAccountWithoutBalance(accountNumber: number): Omit<BankAccount, 'balance'> | undefined {
        const account = this.getAccountByNumber(accountNumber);
        if (account) {
            const { balance, ...accountWithoutBalance } = account;
            return accountWithoutBalance;
        }
        return undefined;
    }

    updateAccount(accountNumber: number, updatedInfo: Partial<BankAccount>): void {
        const account = this.getAccountByNumber(accountNumber);
        if (account) {
            if (updatedInfo.accountHolder !== undefined) {
                account.accountHolder = updatedInfo.accountHolder;
            }
            if (updatedInfo.balance !== undefined) {
                account.balance = updatedInfo.balance;
            }
        } else {
            throw new Error("Account not found");
        }
    }
}

// Ví dụ sử dụng
const manager = new BankAccountManager();

// Tạo tài khoản
const account1 = new BankAccount(1, "Alice");
const account2 = new BankAccount(2, "Bob", 500);

manager.createAccount(account1);
manager.createAccount(account2);

// Nạp tiền
manager.deposit(2, 200);
console.log(manager.getAccountByNumber(2)); // { accountNumber: 2, accountHolder: 'Bob', balance: 700 }

// Rút tiền
manager.withdraw(2, 100);
console.log(manager.getAccountByNumber(2)); // { accountNumber: 2, accountHolder: 'Bob', balance: 600 }

// Cập nhật thông tin tài khoản
manager.updateAccount(2, { accountHolder: "Robert" });
console.log(manager.getAccountByNumber(2)); // { accountNumber: 2, accountHolder: 'Robert', balance: 600 }

// Lấy thông tin tài khoản mà không bao gồm số dư
console.log(manager.getAccountWithoutBalance(2)); // { accountNumber: 2, accountHolder: 'Robert' }

// Lấy tên chủ tài khoản và số dư
console.log(manager.getAccountHolderAndBalance(2)); // { accountHolder: 'Robert', balance: 600 }

// Liệt kê tất cả các tài khoản
console.log(manager.listAllAccounts()); // [{ accountNumber: 1, accountHolder: 'Alice', balance: 0 }, { accountNumber: 2, accountHolder: 'Robert', balance: 600 }]
