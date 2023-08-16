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
})

btnReset.addEventListener("click",()=>{
    nameInput.value = "";
    weightInput.value = "";
    heightInput.value = "";
    btnGo.classList.remove("hidden")
    btnReset.classList.add("hidden")

})
