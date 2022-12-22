"use strict";
let inputFiglio = document.querySelector("#figlio");
let btnFiglioDeposita = document.querySelector("#btn-figlio1");
let btnFiglioRitira = document.querySelector("#btn-figlio2");
let sonBalance = document.querySelector("#sonBalance");
btnFiglioDeposita === null || btnFiglioDeposita === void 0 ? void 0 : btnFiglioDeposita.addEventListener("click", function () {
    sonAccount.deposit(parseInt(inputFiglio.value));
    console.log("Amount to deposit: ", parseInt(inputFiglio.value));
    console.log("Son account balance: " + sonAccount.balance);
    sonBalance.innerHTML = "Balance: " + sonAccount.balance.toString();
});
btnFiglioRitira === null || btnFiglioRitira === void 0 ? void 0 : btnFiglioRitira.addEventListener("click", function () {
    if (sonAccount.balance - parseInt(inputFiglio.value) >= 0) {
        sonAccount.withdraw(parseInt(inputFiglio.value));
        console.log("Amount to withdraw: ", parseInt(inputFiglio.value));
        console.log("Balance: ", sonAccount.balance);
        sonBalance.innerHTML = "Balance: " + sonAccount.balance.toString();
    }
    else {
        console.log("Can't withdraw this amount");
        console.log("Balance: ", sonAccount.balance);
        sonBalance.innerHTML = "Balance: " + sonAccount.balance.toString();
    }
});
let inputMadre = document.querySelector("#madre");
let btnMadreDeposita = document.querySelector("#btn-madre1");
let btnMadreRitira = document.querySelector("#btn-madre2");
let motherBalance = document.querySelector("#motherBalance");
let motherInt = document.querySelector("#interesse");
btnMadreDeposita === null || btnMadreDeposita === void 0 ? void 0 : btnMadreDeposita.addEventListener("click", function () {
    motherAccount.deposit(parseInt(inputMadre.value));
    console.log("Amount to deposit: ", parseInt(inputMadre.value));
    console.log("Mother's account balance: " + "" + motherAccount.balance);
    motherBalance.innerHTML = "Balance: " + motherAccount.balance.toString();
    motherAccount.addInterest();
});
btnMadreRitira === null || btnMadreRitira === void 0 ? void 0 : btnMadreRitira.addEventListener("click", function () {
    if (motherAccount.balance - parseInt(inputMadre.value) >= 0) {
        motherAccount.withdraw(parseInt(inputMadre.value));
        console.log("Amount to withdraw: ", parseInt(inputMadre.value));
        console.log("Balance: ", motherAccount.balance);
        motherBalance.innerHTML = "Balance: " + motherAccount.balance.toString();
    }
    else {
        console.log("Can't withdraw this amount");
        console.log("Balance: ", motherAccount.balance);
        motherBalance.innerHTML = "Balance: " + motherAccount.balance.toString();
    }
});
class Account {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(ammontare_versamento) {
        this.balance += ammontare_versamento;
    }
    withdraw(ammontare_ritiro) {
        this.balance -= ammontare_ritiro;
    }
}
let sonAccount = new Account();
class Mother extends Account {
    constructor() {
        super(...arguments);
        this.interesse = 10;
    }
    addInterest() {
        console.log("interest: " + this.interesse + "%" + " = " + (this.balance / 100 * this.interesse));
        let balance_int = (this.balance / 100 * this.interesse) + this.balance;
        console.log("Mother account with interest added: " + balance_int);
        let motherBalanceWithInterest = document.querySelector("#motherBalanceWithInterest");
        motherBalanceWithInterest.innerHTML = " Balance with interest: " + balance_int.toString();
    }
}
let motherAccount = new Mother();
motherInt.textContent = "Interesse: " + motherAccount.interesse.toString() + "%";
