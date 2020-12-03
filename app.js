var input = document.querySelector("#txt-input");
var inputText = input.value;
 
var translate = document.querySelector("#btn-translate");

var output = document.querySelector("#txt-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"
var url = serverUrl + "?"+"text="+inputText; 

function errorHandler(error){
    output.value = "Error"+ error;
    output.value = "Something went wrong, please try after sometime!";
}

function translator(){
    fetch(url)
    .then(response => response.json())
    .then(json => output.value = json.contents.translated)
    .catch(errorHandler)
    
}

translate.addEventListener("click", translator);