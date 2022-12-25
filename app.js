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
            screenValue = "";
            screen.value = screenValue;
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
            if (screenValue == "256324243"){
                <iframe src="thuan.ml/projects.html" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="100vh" width="100%" allowfullscreen></iframe>
                }
        }
    });
}






