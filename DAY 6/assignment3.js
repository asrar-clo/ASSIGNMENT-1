console.log("hello");   



// dark mode
const dmode =document.getElementById("Dark");

dmode.onclick = function changeColor(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.fontFamily = "Helvetica";
}
const dmode1 =document.getElementById("Dark1");

dmode1.onclick = function changeColor(){
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "blue";
    document.body.style.fontFamily = "bold";
}
const name = (prompt(" Please Enter your Name"));

furious.innerText = `Welcome to our LetsUpgrade Family ${name}`;

//button 
const button = document.getElementById("btn");

button.onclick  = function(){
    alert("If you want a darkmode Click on darkmode button !!!");
}
const ctime = document.getElementById("time");

function clock(){
let date = new Date();
let time = date.toLocaleTimeString();
ctime.innerText = time;
}
setInterval(clock,1000);

// function showAlert(){
//     alert("Hey Iam from the button ,btn");
// }

// const text  = document.getElementById("text");
// const button = document.getElementById("btn");

// button.onclick = ()=>{
//     if(text.className =='show'){
//        text.className ='';
//        button.innerText="Read Less";
//     }
//     else{
//         text.className = 'show';
//         button.innerText ="Read More";
//     }
// }