'use strict';

const Account = function(login, mail) {
  this.login = login;
  this.mail = mail;
  Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.mail}`);
  };
};

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com
