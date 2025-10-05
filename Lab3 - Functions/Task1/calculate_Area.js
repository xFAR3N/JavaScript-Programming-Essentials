let width;
let length;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    let result = length * width;
    document.getElementById("result").innerHTML = `The area of rectangle is: ${result}`;
}   