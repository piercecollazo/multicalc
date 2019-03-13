/*
# ========================================================
# = Initialization
# ========================================================
*/

// global array
let numbers = [];

// Switch (appLever) for all the math functions(and others dependent on loops)
// Each function will modify the value and run another function (doItAll) that holds a single loop.
// doItAll will run a loop containing a series of conditionals, and the switch will determine which condition runs.

let appLever = '';

// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {

    // When the user clicks the append button, append the given number to the list.
    document.querySelector('#append')
        .addEventListener('click', appendToList);

    // When the user clicks the remove button, remove the number at the index given from the list.
    document.querySelector('#remove')
        .addEventListener('click', removeFromList);

    // When the user clicks the clear button, remove all items from the list.
    document.querySelector('#clear')
        .addEventListener('click', clearList);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#add')
        .addEventListener('click', addToAll);

    // When the user clicks the subtract button, subtract the value to each item.
    document.querySelector('#subtract')
        .addEventListener('click', subtractFromAll);
        
    // When the user clicks the multiply button, multiply the value by each item.
    document.querySelector('#multiply')
        .addEventListener('click', multiplyByAll);
        
    // When the user clicks the divide button, divide the value from each item.
    document.querySelector('#divide')
        .addEventListener('click', divideFromAll);

    // When the user clicks the exponent button, multiple the items to themselves based off of the value input
    document.querySelector('#triangulate')
    .addEventListener('click', triangulateAll);

    // When the user clicks the remove value button, remove the value from the list without having to enter index.
    document.querySelector('#removeVal')
    .addEventListener('click', removeValue);
}

// ===================================
// App loop for all functions
// ===================================

function doItAll(myNum){
    for(let i = 0; i < numbers.length; i++){
        // Add to all
        if(appLever === 'Add'){
          numbers[i] = numbers[i] + myNum;
        // Subtract all
        }else if(appLever === 'Subtract'){

        // Multiply all
        }else if(appLever === 'Multiply'){
          numbers[i] = numbers[i] * myNum;

        // Divide all
        }else if(appLever === 'Divide'){
          numbers[i] = numbers[i] / myNum;

        // Remove value
        }else if(appLever === 'Remove value' && myNum === numbers[i]){
          numbers.splice(i, 1);
        //  Apply all to Celsius
        }else if(appLever === 'Triangulate'){
            numbers[i] = (numbers[i] * myNum) / 2;
        }
      }
}


/*
# ========================================================
# = List Management
# ========================================================
*/

// Append to the list.
function appendToList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the value we're going to append from the input field.
    let number = parseInt(document.querySelector('#listNumber').value);

    // Append the number to our array.
    // Hint: here (and elsewhere), watch the TYPE of the value above.
    // Research `typeof` operator if you're not sure.
    if(number != NaN){
        numbers.push(number);
    }
    // Update our html.
    resetInput();
    updateUL();



}
// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index we'll remove from the input field.
    let index = parseInt(document.querySelector('#listNumber').value);

    // Remove the number at that index from the list.
    if(index != NaN){
        numbers.splice(index, 1);
    }
    /*
        ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */

    // Update our html.
    resetInput();
    updateUL();


}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Clear the array of all values.
    numbers = [];

    // Update our html.
    updateUL();
    
}

function removeValue(){
    event.preventDefault();

    let userListNum = parseInt(document.querySelector('#listNumber').value);

    // for(let i = 0; i < numbers.length; i++){
    //     if(value === numbers[i]){
    //         numbers.splice(i, 1);
    //     }
    // }

    appLever = 'Remove value';
    doItAll(userListNum);

    resetInput();
    updateUL();
}

/*
# ========================================================
# = Math Section
# ========================================================
*/


function addToAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let userMathNum = parseInt(document.querySelector('#numberForMath').value);

    // Add value to everything on the list.
    // for(let i = 0; i < numbers.length; i++){
    //     numbers[i] = numberToAdd + numbers[i];
    // }
    appLever = 'Add'
    doItAll(userMathNum);


    // Update our html.
    resetInput()
    updateUL();
}

function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to subtract.
    let userMathNum = parseInt(document.querySelector('#numberForMath').value);
    
    // Subtract value from everything on the list.
    // for(let i = 0; i < numbers.length; i++){
    //     numbers[i] = numbers[i] - numberToSubtract;
    // }
    appLever = 'Subtract';
    doItAll(userMathNum);

    // Update our html.
    resetInput()
    updateUL();
}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to multiply.
    let userMathNum = parseInt(document.querySelector('#numberForMath').value);
    
    // Multiply value of everything on the list.
    // for(let i = 0; i < numbers.length; i++){
    //     numbers[i] = numberToMultiply * numbers[i];
    // }
    appLever = 'Multiply'
    doItAll(userMathNum);

    // Update our html.
    resetInput();
    updateUL();
}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let userMathNum = parseInt(document.querySelector('#numberForMath').value);

    // Divide value from everything on the list.
    // for(let i = 0; i < numbers.length; i++){
    //     numbers[i] = numbers[i] / numberToDivide;
    // }
    appLever = 'Divide';
    doItAll(userMathNum);

    // // Update our html.plo
    resetInput();
    updateUL();
}

function triangulateAll(event){
    event.preventDefault();
    
    let userMathNum = parseInt(document.querySelector('#numberForMath').value);

    // for(let i = 0; i < numbers.length; i++){
    //     numbers[i] = numbers[i] * (numbers[i] * numberToExponent);
    // }
    appLever = 'Triangulate'
    doItAll(userMathNum);
    resetInput();
    updateUL();
}

/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
    clearUL();
    for(let i = 0; i < numbers.length; i++) {
        addToUL(numbers[i]);
    }
}

function clearUL() {
    const ul = document.querySelector('#numberList');
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const ul = document.querySelector('#numberList');
    const newLI = document.createElement('li');
    newLI.innerText = numberToAppend;
    ul.appendChild(newLI);
}
// =======================================
// Miscellaneous quality of life functions
// =======================================

// Clearing the input field upon button use.
function resetInput() {
    document.querySelector('#listNumber').value = '';
    document.querySelector('#numberForMath').value = '';
}