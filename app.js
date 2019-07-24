// BUDGET CONTROLLER/MODULE

const budgetController = (function() {

    
})();

// UI CONTROLLER/MODULE

const UIController = (function() {

    return {
        getinput: function() {
            let type = document.querySelector.apply('.add__type').value;
        }
    };

})();

// APP CONTROLLER

const controller = (function(budgetCtrl, UICtrl) {

    let ctrlAddItem = function() {

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);