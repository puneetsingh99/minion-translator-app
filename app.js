var input = document.querySelector("#txt-input");
var inputText = input.value;
 
var translate = document.querySelector("#btn-translate");

var output = document.querySelector("#txt-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"
const url = serverUrl + "?"+"text="+inputText; 

function errorHandler(error){
    console.log("Error", error);
    console.log("Something went wrong! Try again after sometime");
}

function translator(){
    fetch(url)
    .then(response => response.json())
    .then(json => output.value = json.contents.translated)
    .catch(errorHandler)
    
}

translate.addEventListener("click", translator);