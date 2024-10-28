const handleResult = () =>{

    const selectedOption = document.querySelector('input[name="oneQues"]:checked');
    
    const resultElement = document.getElementById("result");

    if(selectedOption){
        if(selectedOption.value === "14"){
        
            resultElement.textContent = "Right answer.";
            resultElement.style.color = "green";
        }else{
            resultElement.textContent = "Wrong answer.";
            resultElement.style.color = "red";
        }

    }else{
        resultElement.textContent = "Please select an answer.";
        resultElement.style.color = "orange";
    }
    

};