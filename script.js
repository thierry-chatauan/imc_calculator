let nameInput = document.getElementById("name")
let weightInput = document.getElementById("weight")
let heightInput = document.getElementById("height")
let btn = document.getElementById("calculate")
let resultElement = document.getElementById("result")


btn.addEventListener("click", ()=>{
    let name = nameInput.value
    let weight = parseFloat(weightInput.value)
    let height  = parseFloat(heightInput.value/100)
    
    if(isNaN(weight)|| isNaN(height)||height === 0){
        resultElement.innerText = `please, fill the inputs`;
        return;
    }    

    let heightSquare = height * height;    
    let imc = (weight/heightSquare).toFixed(1)

    name = name.charAt(0).toUpperCase() + name.slice(1)

    resultElement.innerText = `Your name is ${name} and your IMC is ${imc}`
})
