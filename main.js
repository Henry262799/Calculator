//DOM Element References

const display_content=document.querySelector('.display_content');
const calcButtons=document.querySelectorAll('.calculator-button');
const operatorButtons=document.querySelectorAll('.operator-button');
const deleteButton=document.querySelector('.delete_button');
const clearButton=document.querySelector('.clear_button');
const equalButton=document.querySelector('.operator-button-equals');


// Global Variables to store content
let stored_value="";
let stored_operation="";
display_content.textContent="";
let operatorClicked=false;









//Event listener for buttons that are not clear and delete;

calcButtons.forEach(button=>{
    button.addEventListener('click', event=>{
        updateDisplay(button);
    })
})

//Event Listener for the delete button
deleteButton.addEventListener('click', event=>{
    delete_method_calc();
})

//Event Listener for the operator buttons excluding equals

operatorButtons.forEach(button=>{
    button.addEventListener('click', event=>{
        operator_clicked(button);
    })
})

//Event Listener for the clear button

clearButton.addEventListener('click', event=>{
    clearAll();
})

//Event Listener for equals Button
equalButton.addEventListener('click',event=>{
    equalExecution();
})

/**
 * This method updates the current display
 * @param {Element} input 
 */
function updateDisplay(input){
    
    let value=input.getAttribute('data-value');
    //console.log(value);
    //console.log(typeof(display_content.textContent));

    if(display_content.textContent.includes('.') && value==='.'){
        display_content.textContent=display_content.textContent;
    }
    else if(stored_value.length===0){
        display_content.textContent=display_content.textContent + value;
    }

    if(operatorClicked){
        display_content.textContent="";
        display_content.textContent=display_content.textContent+value;
    }
    else if(stored_value.length>0){
        display_content.textContent=display_content.textContent+value;
    }

    operatorClicked=false;
    
}

/**
 * This method deletes the last input clicked.
 * @returns Does not return anything
 */
function delete_method_calc(){

    //console.log(display_content.textContent.length);

    if(display_content.textContent.length===0){
        return;
    }

    if(display_content.textContent==stored_value){
        stored_value="";
    }

    display_content.textContent=display_content.textContent.substring(0,display_content.textContent.length-1);

}


/**
 * This method executes the function of what happens when operator buttons are clicked.
 * @param {Element} input This element contains the operation that was clicked.
 * @returns 
 */
function operator_clicked(input){

    operatorClicked=true;

    //Check if the displayed textContent has a number
    if(!hasNumber(display_content.textContent)){
        //console.log('no number')
        return;
    }

    //console.log(store_operation);
    //console.log(stored_value);
    //console.log('here');

    if(stored_value===display_content.textContent ){
        stored_value=display_content.textContent;
    }

    if(hasNumber(display_content.textContent) && stored_value.length>0 && operatorClicked){
        display_content.textContent=operate(stored_operation,stored_value,display_content.textContent);
        
        stored_operation=input.getAttribute('data-value');
        stored_value=display_content.textContent;
        //console.log(stored_value);
    
    }
    else{
        //console.log(stored_value);
        stored_value=display_content.textContent;
        stored_operation=input.getAttribute('data-value');

    }



}


/**
 * This method provides us the results of the operations.
 * @returns This method returns only when the there is no text content
 */
function equalExecution(){

    if(!hasNumber(display_content.textContent)){
        //console.log('no number')
        return;
    }

    if(hasNumber(display_content.textContent) && stored_value.length>0 ){
        display_content.textContent=operate(stored_operation,stored_value,display_content.textContent);

    }
    //display_content.textContent=stored_value;
    stored_value=display_content.textContent;
    stored_operation="";
    operatorClicked=false;


}





/**
 *  Returns the sum of number_1 and number_2
 * @param {Number} number_1 
 * @param {Number} number_2 
 * @returns {Number} 
 */
function add(number_1,number_2){
    let sum=number_1+number_2;
    return ""+sum;
}


/**
 * Returns the difference between number_1 and number_2
 * @param {Number} number_1 
 * @param {Number} number_2 
 * @returns {Number}
 */
function subtract(number_1,number_2){
    let difference=number_1-number_2;
    return ""+difference;
}



/**
 * Returns the product between number_1 and number_2
 * @param {Number} number_1 
 * @param {Number} number_2 
 * @returns {Number}
 */
function multiply(number_1,number_2){
    let product=number_1*number_2;
    return ""+product;
}


/**
 * Returns the quotient between number_1 and number_2.
 * @param {Number} number_1 
 * @param {Number} number_2 
 * @returns {Number}
 */
function divide(number_1,number_2){

    if(number_2===0){return "ERROR PLEASE CLEAR"}
    let quotient=number_1/number_2;

    //console.log(quotient);
    return ""+quotient;
}


/**
 * Operate takes in one of four operations and then returns the evaluated results.
 * @param {String} operation 
 * @param {String} number_1 
 * @param {String} number_2 
 * @returns a number in the form of a string.
 */
function operate(operation,number_1,number_2){

    console.log(operation);

    if(operation==="+"){
        return add(parseInt(number_1),parseInt(number_2));
    }
    else if(operation==="-"){
        return subtract(parseInt(number_1),parseInt(number_2));
    }
    else if(operation==="x"){
        return multiply(parseInt(number_1),parseInt(number_2));
    }
    else if(operation==="/"){
        return divide(parseInt(number_1),parseInt(number_2));
    }
}


/**
 * Returns a boolean value stating whether the given string has a number or not.
 * @param {String} myString 
 * @returns a true or false value
 */
function hasNumber(myString) {
    return /\d/.test(myString);
  }

/**
 * This funtion resets the calculator to its default state.
 */
function clearAll(){

    display_content.textContent="";
    stored_value="";
    stored_operation="";
    operatorClicked=false;
}

