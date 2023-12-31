function calculateTriangleArea() {
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
    areaSpan.innerText = area;


}

function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    const lengthField = document.getElementById("rectangle-length");
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    if (isNaN(width)) {
        alert("width is not a number");
        return;
    }

    const area = width * length;
    const areaSpan = document.getElementById("rectangle-area");
    areaSpan.innerText = area;

}



function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    if (isNaN(base) || isNaN(height)) {
        alert("Please Insert A Number");
    }

    const area = base * height;
    setElementInnerText("parallelogram-area", area);

    addCalculationEntry("Parallelogram", area);

}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-first-radius');
    const minorRadius = getInputValue('ellipse-second-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addCalculationEntry("Ellipse", areaTwoDecimal)

}


function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}

// reuseable set span , p , div ect text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


function addCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    // p.innerHTML =areaType+' '+ area;
    p.classList.add('my-4');
    p.classList.add("font-bold");
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}