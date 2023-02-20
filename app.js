var getScreen = document.getElementById("screen")
var getButtons = document.querySelectorAll("button");

let getStoredElement = [];
let getString;

function performCalculation(btn){
    var getValue = btn.textContent; //textContent returns the concatenation of the textContent of every child node.

    if(getValue === "CLEAR"){
        getStoredElement = [];
        getScreen.innerText = "0";
    }else if(getValue === "="){
        getScreen.innerText = eval(getString);
    }else{
        getStoredElement.push(getValue);
        getString = getStoredElement.join("");
        getScreen.innerText = getString
    }
}

getButtons.forEach(btn => btn.addEventListener("click", ()=> performCalculation(btn) ));