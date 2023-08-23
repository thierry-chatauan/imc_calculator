let nameInput = document.getElementById("name")
let weightInput = document.getElementById("weight")
let heightInput = document.getElementById("height")
let btnGo = document.getElementById("calculate")
let btnReset = document.getElementById("reset") 
let resultElement = document.getElementById("result")


btnGo.addEventListener("click", ()=>{
    let name = nameInput.value
    let weight = parseFloat(weightInput.value)
    let height  = parseFloat(heightInput.value)
    
    if(isNaN(weight)|| isNaN(height)||height === 0){
        resultElement.innerText = `please, fill the inputs`;
        return;
    }    

    let heightSquare = height * height;    
    let imc = (weight/heightSquare).toFixed(1)

    name = name.charAt(0).toUpperCase() + name.slice(1)

    resultElement.innerHTML = `Hi ${name}, <br>Your IMC is ${imc}`
    btnGo.classList.add("hidden")
    btnReset.classList.remove("hidden")

    

    switch (true){
        case imc <=16.9: 
            resultElement.innerHTML += `<br> and you are very thin`;
            break;
        case imc >= 17 && imc <= 18.4:
            resultElement.innerHTML += `<br> and you are just thin`;
            break;
        case imc >= 18.5 && imc <= 24.9:
            resultElement.innerHTML += `<br> and you are very good`;
            break;
        case imc >= 25 && imc <= 29.9:
            resultElement.innerHTML += `<br> and you are overweight`;;
            break;
        case imc >= 30 && imc <= 34.9:
            resultElement.innerHTML += `<br> and you have obesity type 1`;
            break;
        case imc >= 35 && imc <= 40:
            resultElement.innerHTML += `<br> and you have obesity type 2`;
            break;
        default :
        resultElement.innerHTML += `<br> and you have obesity type 3`;
        break;
    }
})

btnReset.addEventListener("click",()=>{
    nameInput.value = "";
    weightInput.value = "";
    heightInput.value = "";
    resultElement.innerHTML= "";
    btnGo.classList.remove("hidden")
    btnReset.classList.add("hidden")


})
