function calculateSum(){
    let itemOne = parseFloat(document.getElementById("grocery1").value);
    let itemTwo = parseFloat(document.getElementById("grocery2").value);
    let itemThree = parseFloat(document.getElementById("grocery3").value);
    if(isNaN(itemOne) || isNaN(itemTwo) || isNaN(itemThree)){
        alert("Please enter valid numbers.");
    }
    else{
        var result = itemOne + itemTwo + itemThree;
        document.getElementById("result").innerText = `The sum of groceries is ${result} USD`;
    }
}