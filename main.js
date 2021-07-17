const display_content=document.querySelector('.display_content');
const calcButtons=document.querySelectorAll('.calculator-button');
const deleteButton=document.querySelector('.delete_button');

let stored_value="";
display_content.textContent="";









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
    else{
        display_content.textContent=display_content.textContent + value;
    }
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

    display_content.textContent=display_content.textContent.substring(0,display_content.textContent.length-1);

}

function operateor_clicked(input){

    //Check if the displayed textContent has a number
    if(!hasNumber(display_content.textContent)){
        return;
    }

    console.log('here');
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

function hasNumber(myString) {
    return /\d/.test(myString);
  }