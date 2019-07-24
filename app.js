// BUDGET CONTROLLER/MODULE

var budgetController = (function() {

    
})();

// UI CONTROLLER/MODULE

var UIController = (function() {

    return {
        getInput: function() {
            return {
                 type: document.querySelector('.add__type').value,
                 description: document.querySelector('.add__description').value,
                 value: document.querySelector('.add__value').value
            };
        }
    };

})();

// APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

    let ctrlAddItem = function() {

        // Get the field data
        let input = UICtrl.getInput();
        console.log(input);

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);