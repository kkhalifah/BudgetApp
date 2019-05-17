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
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            // ID = last ID + 1
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        },
       testing: function(){
           console.log(data);
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };
    
    return {
      getInput: function() {
          return {
              type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: document.querySelector(DOMstrings.inputValue).value
          };          
      },
        
        addListItem: function(obj, type){
            var html, newHtml, element;
            //create html string placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
               
            // replace the placeholder text with data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            // insert the html ito the dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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
        var input, newItem;
        
        // 1. get filled input data
         input = UICtrl.getInput();
        
       // 2. add the item to the budget controller
         newItem = budgetCtrl.addItem(input.type, input.description, input.value);
       
       //3. add the item to the budget controller
        UICtrl.addListItem(newItem, input.type);
        
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