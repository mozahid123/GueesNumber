//task 1:when press "click" show the value from form in numberguess veriable
//task 2.generate a random number and save it to correct number
//task 3:wether guess is too low or too high

//task 4:make function displayresult() 

//task 5:make function instead of too low too high ;
//task 6:pass the value of function

//task 7:make savegussehistory function

//task 8:display guess function
//task 9:restart the game


let guesses=[];
//4
var correctNumber=randomNumber();


//1
window.onload=function(){
    document.getElementById("check").addEventListener("click",playGame);

    document.getElementById("restart").addEventListener("click",initGame);

}


function playGame(){
    //2
     var  numberguess=document.getElementById("guess").value;
     displayResult(numberguess);
     saveGuessHistory(numberguess);
     displayHistory();
 
}

//5
function displayResult(numberguess){

    if(numberguess>correctNumber){
       showNumberAbove();
       
    }
    else if(numberguess<correctNumber){
       showNumberBelow()
       
    }
    else if(numberguess==correctNumber){
       showYouWon();
       
    }
       
}
function initGame(){
    correctNumber=randomNumber();
    document.getElementById("result").innerHTML="";
    guesses=[];
    displayHistory();

}
function getDialog(dialogType,text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog="<div class='alert alert-warning'>"
            break;

            case "won":
                dialog="<div class='alert alert-success'>"
                break;
    }
    dialog+=text;
    dialog+="</div>";
    return dialog;
}

function showYouWon(){
const text="Awesome job,you get it!!" 
let dialog=getDialog('won',text);
document.getElementById("result").innerHTML=dialog;
}

function showNumberAbove(){
    const text="Your guess is too high!!"   
    let dialog=getDialog('warning',text);
document.getElementById("result").innerHTML=dialog;

}
function showNumberBelow(){
    const text="Your guess is too low!!" 
    let dialog=getDialog('warning',text);
document.getElementById("result").innerHTML=dialog;  
}

function saveGuessHistory(guess){
    guesses.push(guess);
    console.log(guesses)
}

function displayHistory(){
    let index=guesses.length-1;
    let list="<ul class='list-group'>";

    while(index>=0){
    list+="<li class='list-group-item mt-3'>"+"You guess "+guesses[index]+"</li>"
    index-=1;
    }


    list+='</ul>'
    document.querySelector(".history").innerHTML=list;
}
//3
function randomNumber(){
 var x=Math.floor(Math.random()*100)+1;
 return x;
}

