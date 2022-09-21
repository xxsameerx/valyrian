var btntranslate =document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-Input");
var outputdiv=document.querySelector("#output");
var errorbox=document.querySelector("#outputbox")


var serverURL=	"https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
        return serverURL+"?"+"text="+input;
    }
    
function errorhandler(error){
 console.log("error occured",error);
 errorbox.innerText="something wrong with server! please try again later"

}
  
function clickHandler() {
    var inputText = txtinput.value;



fetch(getTranslationURL (inputText))
    .then(response=>response.json())
    .then(json=> {
        var transaltedText= json.contents.translated;
        outputdiv.innerText=transaltedText;
    })
    .catch(errorhandler)
};

    btntranslate.addEventListener("click",clickHandler);