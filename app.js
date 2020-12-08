var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-txt");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
};

function errorHandler(error){
    console.log("error occured",error);
    alert("Something went wrong!");
};

function clickHandler(){
    var input = inputTxt.value;
fetch(getTranslationURL(input))
.then(response => response.json())
.then(json => {
    var translatedTxt = json.contents.translated;
    outputDiv.innerText = translatedTxt;
})
.catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);