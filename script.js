//function that displays selected buttons on resultscreen
function print_btnvalue(btnvalue)
{
    document.getElementById("resultscreen").value+=btnvalue;
}

//function that evaluates selected buttons(both operands and operators) and returns result
function calculator_result()
{
    if(document.getElementById("resultscreen").value=='')
    document.getElementById("resultscreen").value='';
    else{
    let x = document.getElementById("resultscreen").value;
    x = x.replace(/÷/g, "/"); // Replacing '÷' symbol with '/' using Regex
    x = x.replace(/x/g,"*"); // Replacing 'x' symbol wth '*' using Regex
    let y = eval(x); // JS functin which evaluates given string and returns its value
    document.getElementById("resultscreen").value=y;
    }
}

function reset_btn()
{
    document.getElementById("resultscreen").value="";
}

function backspace_btn() {
    let value = document.getElementById("resultscreen").value;
    document.getElementById("resultscreen").value = value.substr(0,value.length-1);
}
function hear_result() {
    let msg = new SpeechSynthesisUtterance(); // Java script interface which creates its below objects
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    msg.text = document.getElementById("resultscreen").value;
    window.speechSynthesis.speak(msg);
}
