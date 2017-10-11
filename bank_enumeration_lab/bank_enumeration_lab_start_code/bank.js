var Bank = function() {
  this.accounts = []
}

Bank.prototype = {

  addAccount: function(account) {
    this.accounts.push(account)
  }

}

Bank.prototype.totalValue = function(){
  var total = 0;
  this.accounts.forEach(function(account){
    total += account.value;
  })
  return total;
}

Bank.prototype.accountByName = function(name){
  function nameIsEqual(account){
    if (account.name === name) {
      return account;
    }
  }
  return this.accounts.find(nameIsEqual);
  }

  Bank.prototype.largestAccount = function () {
    var highestValue = 0;
    var highestAccount = this.accounts[0];
    this.accounts.forEach(function(account){
      if(account.value > highestValue) {
        highestValue = account.value;
        highestAccount = account;
      }
    })
      return highestAccount;
  };

Bank.prototype.averageValue = function () {
  var totalAmount = this.totalValue();
  var accounts = this.accounts;
  var average = totalAmount / accounts.length;
  return average;
};

Bank.prototype.businessAccounts = function () {
  var foundBusinessAccounts = this.accounts.filter(function (account){
    return account.type === "business";
  })
  return foundBusinessAccounts;
};

module.exports = Bank;
