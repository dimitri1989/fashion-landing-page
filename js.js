

function axali(){
    
    let y = document.getElementById("gamozaxeba").value;
    let text = document.getElementById("number");
    if(y.length>0 ) {
       text.innerHTML="მეილი სწორია";
       text.style.color="green"; 
       document.getElementById("gamozaxeba").style.border="2px solid green";
       return; 
    }
  
    else if(y.length==0)
    {
        text.innerHTML="შეავსეთ მეილი"; 
        text.style.color="red";
        document.getElementById("gamozaxeba").style.border="2px solid red";
    }
};