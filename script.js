var me;
var myscore=0;
var you;
var youscore=0;
var choices=["rock","paper","scissors"];

window.onload=function(){
    for(let i=0; i<3; i++){
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i]+ ".png";
        choice.addEventListener("click",khtar);
        document.getElementById("choices").append(choice);

    }
}

function khtar(){
    me=this.id;
    document.getElementById("my-choice").src= me + ".png";

    you = choices[Math.floor(Math.random()*3)];
    document.getElementById("you-choice").src = you + ".png";

    if(me==you){
        myscore+=1;
        youscore+=1;
    }
    else{
        if(me=="rock"){
            if(you=="scissors"){
                myscore+=1;
            }
            else if(you=="paper"){
                youscore+=1;
            }
        }
        else if(me=="scissors"){
            if(you=="paper"){
                myscore+=1;
            }
            else if(you=="rock"){
                youscore+=1;
            }
        }
         else if(me=="paper"){
            if(you=="rock"){
                myscore+=1;
            }
            else if(you=="scissors"){
                youscore+=1;
            }
        }
    }
document.getElementById("my-score").innerHTML= myscore;
document.getElementById("you-score").innerHTML= youscore;
    
}