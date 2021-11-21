function gotogamepage(){
    var username1enter=document.getElementById("username1").value;
    var username2enter=document.getElementById("username2").value;
    localStorage.setItem("username1",username1enter);
    localStorage.setItem("username2",username2enter);
    window.location="index2.html";
}