var budgetController = (function(){
    //wrapped in IFFE
    
   //some code
    
})();


var UIController = (function() {
    
    //some code
    
})();


var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function(){
        // 1. get filled input data
       // 2. add the item to the budget controller
       //3. add the item to the budget controller
       //4. calc the budget
       //5. diaplay the budget on the UI
        console.log('working');
    }
   document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event){
                                //older browsers
        if(event.keyCode === 13 || event.which===13){
           ctrlAddItem();
        }
    });
    
})(budgetController, UIController);