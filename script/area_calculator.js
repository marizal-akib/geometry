function calculateTriangleArea(){
    // get base value
    const baseField = document.getElementById('triangle-base')
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // console.log(height);
    const area = 0.5 * base * height;
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText =area ;


}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText= widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    const lengthField = document.getElementById("rectangle-length");
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    const area = width*length;
    const areaSpan= document.getElementById("rectangle-area");
    areaSpan.innerText = area;

}



function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText("parallelogram-area", area);
    
}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-first-radius');
    const minorRadius = getInputValue('ellipse-second-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);
    
}


function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}

// reuseable set span , p , div ect text
function setElementInnerText(elementId ,area){
    const element = document.getElementById(elementId);
    element.innerText =  area;
}