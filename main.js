const display_content=document.querySelector('.display_content');
const calcButtons=document.querySelectorAll('.calculator-button');

let stored_value="";
display_content.textContent="";









//Event listener for buttons that are not clear and delete;

calcButtons.forEach(button=>{
    button.addEventListener('click', event=>{
        updateDisplay(button);
    })
})

/**
 * This method updates the current display
 * @param {String} input 
 */
function updateDisplay(input){
    
    let value=input.getAttribute('data-value');
    //console.log(value);
    display_content.textContent=display_content.textContent + value;
    console.log(typeof(display_content.textContent));
}






/**
 *  Returns the sum of number_1 and number_2
 * @param {Number} number_1 
 * @param {Number} number_2 
 * @returns {Number} 
 */
function add(number_1,number_2){
    return number_1+number_2;
}


/**
 * Returns the difference between number_1 and number_2
 * @param {Number} number_1 
 * @param {Number} number_2 
 * @returns {Number}
 */
function subtract(number_1,number_2){
    return number_1-number_2;
}



/**
 * Returns the product between number_1 and number_2
 * @param {Number} number_1 
 * @param {Number} number_2 
 * @returns {Number}
 */
function multiply(number_1,number_2){
    return number_1*number_2;
}


/**
 * Returns the quotient between number_1 and number_2.
 * @param {Number} number_1 
 * @param {Number} number_2 
 * @returns {Number}
 */
function divide(number_1,number_2){
    return number_1/number_2;
}


function operate(operation,number_1,number_2){

    if(operation==="add"){
        return add(number_1,number_2);
    }
    else if(operation==="subtract"){
        return subtract(number_1,number_2);
    }
    else if(operation==="multiply"){
        return multiply(number_1,number_2);
    }
    else if(operation==="divide"){
        return divide(number_1,number_2);
    }
}