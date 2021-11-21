send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualanswer=parseInt(number1) * parseInt(number2);
    questionnumber="<h4 id='h4id'>" + number1 + "X" + number2 + "</h4>";
    inputbox="<br>Answer : input type='text' id='inputcheckbox'>";
    checkbutton="<br><br><button id='checkbutton' onclick='check'>Check: </button>";
    row=questionnumber + inputbox + checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}