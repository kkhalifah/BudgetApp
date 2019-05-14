var budgetController = (function(){
    //wrapped in IFFE
    
   //some code
    
})();


var UIController = (function() {
    //storing all strings together in one olace
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
      getInput: function() {
          return {
              type:  document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: document.querySelector(DOMstrings.inputValue).value
          };          
      },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
    
})();


var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMstrings();
    
    var ctrlAddItem = function(){
        // 1. get filled input data
        var input = UICtrl.getInput();
        console.log(input);
        
       // 2. add the item to the budget controller
       //3. add the item to the budget controller
       //4. calc the budget
       //5. diaplay the budget on the UI
        
    }
   document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event){
                                //older browsers
        if(event.keyCode === 13 || event.which===13){
           ctrlAddItem();
        }
    });
    
})(budgetController, UIController);