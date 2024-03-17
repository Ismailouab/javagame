var me;
var myscore=0;
var opponent;
var opponentscore=0;
var choices=["rock","paper","scissors"];

window.onload=function(){
    for(let i=0; i<3; i++){
        let choice=document.createElement("img");
        choice.id=choices[i];
        choice.src=choices[i]+ ".png";
        choice.addEventListener("click",khtar);
        document.getElementById("choices").append(choice);

    }
}