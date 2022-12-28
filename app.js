//calculator

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');     //fetch all the buttons
screenValue ='';
//iterate through all buttons and add event listener
for(item of buttons){
    
    item.addEventListener('click',(e)=>{
        //get the text of all the buttons
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'C'){
            javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.body.addEventListener("click", addClicker, 0);
            // screenValue = "";
            // screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'DEL'){
        
             backspace = screen.value;
             restNum = backspace.slice(0,-1);
             screenValue = restNum;
             screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
            if (screenValue == "246875"){
                window.location.assign('https://www.thuan.ml/projects.html');
                }
        }
    });
}






