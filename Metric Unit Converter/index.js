const InputField = document.getElementById("input-field").value
const  lengthPara = document.getElementById("length-result")
const  volumePara = document.getElementById("volume-result")
const massPara = document.getElementById("mass-result")



function lengthPart(input){
   const  outputMeterToFeet= (input * 3.281).toFixed(3)
   const  outputFeetToMeter =   (input /3.281).toFixed(3)
    const lengthString =` ${input} meters = ${outputMeterToFeet} feet | ${input} feet = ${outputFeetToMeter} meters  `
    return  lengthString
}
function volumePart(input){
   const outputLitreToGallons = (input * 0.264).toFixed(3)
   const outputGallonsToLitre = (input / 0.264).toFixed(3)
    const volumeString = `${input} liters = ${ outputLitreToGallons} gallons | ${input} gallons = ${outputGallonsToLitre} litres`
    return volumeString
}
function massPart(input){
   const outputKilosToPounds = (input * 2.204).toFixed(3)
   const outputPoundsToKilos = (input / 2.204).toFixed(3)
    const massString = `${input} kilos = ${outputKilosToPounds} pounds | ${input} pounds = ${outputPoundsToKilos} kilos`
    return massString
}

function buttonClicked(){
    const InputField = document.getElementById("input-field").value
    if(InputField >= 0 && InputField <= 1000000){
        lengthPara.textContent = lengthPart(InputField)
        volumePara.textContent = volumePart(InputField)
        massPara.textContent = massPart(InputField)
    }else{
        alert("Only Numbers are accepted as valid inputs!")
    }
   

    
}



