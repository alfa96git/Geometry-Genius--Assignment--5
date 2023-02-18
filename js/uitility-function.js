
// Get First Value From Cards.
function getFirstValueById(firstValue) {
    const previousFirstValue = document.getElementById(firstValue).innerText;
    const UpdatedFirstValue = parseFloat(previousFirstValue);
    return UpdatedFirstValue;
};


// Get Second Value From Cards.
function getSecondValueById(secondValue) {
    const previousSecondValue = document.getElementById(secondValue).innerText;
    const UpdatedSecondValue = parseFloat(previousSecondValue);
    return UpdatedSecondValue;
};



// Take Data From Card & Upload It On Container Table.
function upLoadCalculatedValuesOnTableById(serialNumber, fieldName, totalArea) {
    const getCalculatedAreaTableById = document.getElementById('area-table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serialNumber}</td>
    <td>${fieldName}</td>
    <td id = "calculated-area-value" >${totalArea} cm<sup>2</sup></td>
    <td> <button id = "double-area-value-btn" class = "btn btn-sm "> convert m<sup>2</sup> </button> </td>    
    `;
    getCalculatedAreaTableById.appendChild(tr);
}


// Take value from Input Field using Field Id.
function getInputValueFromInputField(inputFieldId) {
    const fieldInputValue = parseFloat(document.getElementById(inputFieldId).value);
    return fieldInputValue;
}



// CM to M
function convertCmToM(totalArea) {
    document.getElementById('double-area-value-btn').addEventListener('click', function () {
        let totalMeterArea = (totalArea * 0.01).toFixed(2);
        document.getElementById('calculated-area-value').innerText = totalMeterArea;
        document.getElementById('double-area-value-btn').innerText = "meters";
    })
}



// Use random color generator
function randomColor(){
    const r =Math.round(Math.random()*256);
    const g =Math.round(Math.random()*256);
    const b =Math.round(Math.random()*256);
    const rgba = `
    rgba(${r},${g},${b})
    `;
    return rgba;
}