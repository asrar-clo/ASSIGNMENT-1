console.log("Hello World");

 a = prompt("click here to change the color of document",Animation); 

var a = ["olivegreen","forestgreen","orange","grey","black","darkblue"];

function changeColor(){ 
    setTimeout (function loop(){
        document.bgColor = a.shift();
        if (a.length){
            setTimeout(loop,2000);
        }
    },2000);
}

   setInterval(changeColor(),2000);
