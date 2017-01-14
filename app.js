(function (){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
      var toBuyList = this;

      toBuyList.items = ShoppingListCheckOffService.getItems();

      toBuyList.itemName = "";
      toBuyList.itemQuantity = "";

      toBuyList.addItem = function(){
        ShoppingListCheckOffService.addItem(toBuyList.itemName,toBuyList.itemQuantity);
      };

      toBuyList.removeItem = function(itemIndex){
        ShoppingListCheckOffService.removeItem(itemIndex);
      };
  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.getItemsB();
    boughtList.addItemB = function (){
      ShoppingListCheckOffService.addItemB(boughtList.itemName,boughtList.itemQuantity);
    };
  }
  function ShoppingListCheckOffService(){
    var ToBuyShoppingList=[{name:"Milk",quantity:"2"},{name:"Donuts",quantity:"200"},{name:"Cookies",quantity:"300"},{name:"Chocolate",quantity:"5"},{name:"Bismol",quantity:"150"}];
    var service = this;
    var itemsToBuy = [];
    var itemsBought = [];

    service.addItem = function (itemName,quantity){
      var item = {
        name : itemName,
        quantity : quantity
      };
      itemsToBuy.push(item);
    };
    service.removeItem = function (itemIndex){
      var item = itemsToBuy[itemIndex]
      itemsBought.push(item);
      itemsToBuy.splice(itemIndex,1);
    };
    service.getItems = function(){
      itemsToBuy = ToBuyShoppingList;
      return itemsToBuy;
    };
    service.addItemsB = function (itemName,quantity){
      var item = {
        name : itemName,
        quantity : quantity
      };
      itemsBought.push(item);
    };
    service.getItemsB = function(){
      return itemsBought;
    };
  }
})();
