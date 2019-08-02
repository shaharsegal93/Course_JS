var budgetController = (function() {

    

    
}) ();



var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getinput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
                
            };
        },
        
        getDomstrings: function(){
            return DOMstrings;
        }
    }; 
    
    
}) ();




var controller = (function (budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDomstrings();
    
    var ctrlAddItem = function() {
        var input = UICtrl.getinput();
        console.log(input);
    }
    
    document.querySelector(DOM.inputBtn).addEventListener('.click', ctrlAddItem);
    document.addEventListener('keypress', function(event){
        if(event.keyCode == 13 || event.which == 13){
            ctrlAddItem();    
        }
    });
    
    
}) (budgetController, UIController);