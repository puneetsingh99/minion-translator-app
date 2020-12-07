var translate = document.querySelector("#btn-translate");

var output = document.querySelector("#txt-output");

function errorHandler(error){
    console.log("error: ", error);
    console.log("Something went wrong, please try again after sometime");
}



function translator(){
    var input = document.querySelector("#txt-input");
    var inputText = input.value;
    var serverUrl = "https://api.funtranslations.com/translate/minion.json"
    const url = serverUrl + "?"+"text="+inputText; 
    fetch(url)
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(errorHandler)
    
}

translate.addEventListener("click", translator);