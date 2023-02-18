// Helps to Count the Table Serial Numbers 
let serialNumber = 0;


// Triangle Section - 1st card
document.getElementById('calculation-btn-triangle').addEventListener('click', function () {

    // Get Field Name From Card.
    const fieldName = document.getElementById('card-name-triangle').innerText;

    // Take Value From Fris Input Field
    const firstInputValue = getInputValueFromInputField('first-value-input-field-triangle');

    // Take Value From second Input Field
    const secondInputValue = getInputValueFromInputField('second-value-input-field-triangle');

    //second-value-input-field
    if (firstInputValue < 0 || isNaN(firstInputValue) || secondInputValue < 0 || isNaN(secondInputValue)) {
        alert("Give Some Valid Input Number.");
    } else {
        // Count Table Serial Number.
        serialNumber++;

        // Total Calculated Area 
        const totalArea = totalAreaOfRectangle(firstInputValue, secondInputValue).toFixed(2);

        // Upload All Data From Card to Container Table.
        upLoadCalculatedValuesOnTableById(serialNumber, fieldName, totalArea);
        convertCmToM(totalArea)
    }

    // After Clicking the Calculate Button the input field will be clear again.
    document.getElementById('first-value-input-field-rectangle').value = '';
    document.getElementById('second-value-input-field-rectangle').value = '';
});




// Rectangle Section - 2nd card
document.getElementById('calculation-btn-rectangle').addEventListener('click', function () {

    // Get Field Name From Card.
    const fieldName = document.getElementById('card-name-rectangle').innerText;

    // Take Value From Fris Input Field
    const firstInputValue = getInputValueFromInputField('first-value-input-field-rectangle');

    // Take Value From second Input Field
    const secondInputValue = getInputValueFromInputField('second-value-input-field-rectangle');

    //second-value-input-field
    if (firstInputValue < 0 || isNaN(firstInputValue) || secondInputValue < 0 || isNaN(secondInputValue)) {
        alert("Give Some Valid Input Number.");
    } else {
        // Count Table Serial Number.
        serialNumber++;

        // Total Calculated Area 
        const totalArea = totalAreaOfRectangle(firstInputValue, secondInputValue).toFixed(2);

        // Upload All Data From Card to Container Table.
        upLoadCalculatedValuesOnTableById(serialNumber, fieldName, totalArea);
        convertCmToM(totalArea)
    }

    // After Clicking the Calculate Button the input field will be clear again.
    document.getElementById('first-value-input-field-rectangle').value = '';
    document.getElementById('second-value-input-field-rectangle').value = '';

});



// Parallelogram Section - 3rd card
document.getElementById('calculation-btn-parallelogram').addEventListener('click', function () {

    // Count Table Serial Number.
    serialNumber++;

    // Get Field Name From Card.
    const fieldName = document.getElementById('card-name-pentagon').innerText;

    // Get First Value From Card.
    const firstValue = getFirstValueById('first-value-parallelogram');

    // Get Second Value From Card.
    const secondValue = getSecondValueById('second-value-parallelogram');

    // Total Calculated Area 
    const totalArea = totalAreaOfParallelogram(firstValue, secondValue);

    // Upload All Data From Card to Container Table.
    upLoadCalculatedValuesOnTableById(serialNumber, fieldName, totalArea);

    convertCmToM(totalArea);

});




// Rhombus Section - 4th card
document.getElementById('calculation-btn-rhombus').addEventListener('click', function () {

    // Count Table Serial Number.
    serialNumber++;

    // Get Field Name From Card.
    const fieldName = document.getElementById('card-name-rhombus').innerText;

    // Get First Value From Card.
    const firstValue = getFirstValueById('first-value-rhombus');

    // Get Second Value From Card.
    const secondValue = getSecondValueById('second-value-rhombus');

    // Total Calculated Area 
    const totalArea = totalAreaOfRhombus(firstValue, secondValue);


    // Upload All Data From Card to Container Table.
    upLoadCalculatedValuesOnTableById(serialNumber, fieldName, totalArea);

    convertCmToM(totalArea)
});



// Pentagon Section - 5th card
document.getElementById('calculation-btn-pentagon').addEventListener('click', function () {

    // Count Table Serial Number.
    serialNumber++;

    // Get Field Name From Card.
    const fieldName = document.getElementById('card-name-pentagon').innerText;

    // Get First Value From Card.
    const firstValue = getFirstValueById('first-value-pentagon');

    // Get Second Value From Card.
    const secondValue = getSecondValueById('second-value-pentagon');

    // Total Calculated Area 
    const totalArea = totalAreaOfPentagon(firstValue, secondValue);

    // Upload All Data From Card to Container Table
    upLoadCalculatedValuesOnTableById(serialNumber, fieldName, totalArea);

    convertCmToM(totalArea)
});



// Ellipse Section - 6th card
document.getElementById('calculation-btn-ellipse').addEventListener('click', function () {

    // Count Table Serial Number.
    serialNumber++;

    // Get Field Name From Card.
    const fieldName = document.getElementById('card-name-ellipse').innerText;

    // Get First Value From Card.
    const firstValue = getFirstValueById('first-value-ellipse');

    // Get Second Value From Card.
    const secondValue = getSecondValueById('second-value-ellipse');

    // Total Calculated Area 
    const totalArea = totalAreaOfEllipse(firstValue, secondValue).toFixed(2);


    // Upload All Data From Card to Container Table.
    upLoadCalculatedValuesOnTableById(serialNumber, fieldName, totalArea);

    convertCmToM(totalArea)

});



// Added Hover Effect Each Card.

const carts = document.querySelectorAll('.card');
for(let card of carts){
    card.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = randomColor();
    }); 
    card.addEventListener('mouseleave', function(e){
        e.target.style.backgroundColor = '';
    })
}


