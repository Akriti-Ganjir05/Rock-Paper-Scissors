let userScore=0;
let compScore=0;

let msg=document.querySelector(".msg")
let us=document.querySelector("#user-score");
let cs=document.querySelector("#comp-score");
//user choice
const choices=document.querySelectorAll('.choice');
console.log(choices)
choices.forEach((element)=>{
   element.addEventListener("click",()=>{
    let userChoice=element.id;
    // console.log("choice was clicked",userChoice)
    playGame(userChoice); //passing userchoice
   })
})

const playGame=(userChoice)=>{
console.log("user choice",userChoice);
const compchoice=genCompChoice();
console.log("computer choice",compchoice);

//compare
if(userChoice===compchoice){
    draw();
}else if(userChoice==="rock" && compchoice==="scissor" ) {
    userScore++;
    us.innerText=userScore;

            msg.innerText="user wins!!!!";
            msg.style.backgroundColor="green";

}else if(userChoice==="rock" && compchoice==="paper"){
    compScore++;
cs.innerText=compScore;
     msg.style.backgroundColor="red";
            msg.innerText="comp wins and you lose";

}else if(userChoice==="paper" && compchoice==="rock") { 
    userScore++;
    us.innerText=userScore;
            msg.innerText="user wins!!!!";
             msg.style.backgroundColor="green";



}else if(userChoice==="paper" && compchoice==="scissor"){
    compScore++;
cs.innerText=compScore;
     msg.style.backgroundColor="red";
            msg.innerText="comp wins and you lose";



}else if(userChoice==="scissor" && compchoice==="paper"){
    userScore++;
    us.innerText=userScore;
            msg.innerText="user wins!!!!";
             msg.style.backgroundColor="green";


}else{
     compScore++;
cs.innerText=compScore;
        msg.innerText="comp wins and you lose";
        msg.style.backgroundColor="red";


}
}


//generate computer choice
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const indx=Math.floor(Math.random()*3);
    return options[indx];
}
//draw function
const draw=()=>{
    console.log("match draw");
    msg.innerText="match is draw";
    msg.style.backgroundColor="blue"
}