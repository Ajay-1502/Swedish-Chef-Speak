let userInput = document.querySelector("#input-txt");
let button = document.querySelector("#button-click");
let output = document.querySelector("#output");

let url = "https://api.funtranslations.com/translate/chef.json";

function generateUrl(inputValue){
    return url + "?" + "text=" + inputValue;
}



function clickHandler(){
    let inputValue = userInput.value;
    fetch(generateUrl(inputValue))
    .then(response => response.json())
    .then(json =>{
        let translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    
}

button.addEventListener("click",clickHandler);