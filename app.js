let userInput = document.querySelector("#input-txt");
let button = document.querySelector("#button-click");
let output = document.querySelector("#output");

let url = "https://api.funtranslations.com/translate/chef.json";

function generateUrl(inputValue){
    return url + "?" + "text=" + inputValue;
}

function errorHandler(error){
    console.log("Error Occured : ",error);
    alert("Something Went Wrong With Server, Try Again After Sometime");
}

function clickHandler(){
    let inputValue = userInput.value;
    fetch(generateUrl(inputValue))
    .then(response => response.json())
    .then(json =>{
        let translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
}

button.addEventListener("click",clickHandler);