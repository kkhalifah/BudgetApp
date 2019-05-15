var budgetController = (function(){
    //wrapped in IFFE
   var Expense = function(id, description, value) {
       this.id = id;
       this.description = description;
       this.value = value;
   };
    
    var Income = function(id, description, value) {
       this.id = id;
       this.description = description;
       this.value = value;
   };
   
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }       
    };
    
    return {
        addItem: function(type, desc, val) {
            var newItem;
            
           // ID = last ID + 1;
            //create new ID
            ID = data.allItems[type][data.allItems[type].length -1].id + 1; 
            
            //create new item based on 'inc' or 'exp' type
            if (type === 'exp'){
                newItem = new Expense(ID, desc, val);
            } else (type === 'inc'){
                 newItem = new Income(ID, desc, val);
            }
            // push in to data scructure
          data.allItems[type].push(newItem);
            //return new element
            return newItem;
        }
    };
     
    
})();


//UI CONTROLLER
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

//CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
         var DOM = UICtrl.getDOMstrings();
            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
            document.addEventListener('keypress', function(event){
                                    //older browsers
            if(event.keyCode === 13 || event.which===13){
            ctrlAddItem();
        }
    });
    };
    
    var ctrlAddItem = function(){
        // 1. get filled input data
        var input = UICtrl.getInput();
        
       // 2. add the item to the budget controller
       //3. add the item to the budget controller
       //4. calc the budget
       //5. diaplay the budget on the UI
        
    };
    
    return {
        init: function(){
            console.log("app has started");
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();