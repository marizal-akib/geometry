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