const playerOneDice=document.getElementById("playerOneDice");
const playerTwoDice=document.getElementById("playerTwoDice");
const result=document.getElementById("result");
let playerOne;
let playerTwo;

function submit(){
    let player1=Math.floor((Math.random()*6)+1);
    let player2=Math.floor((Math.random()*6)+1);

    playerOne="dice"+player1+".png";
    playerTwo="dice"+player2+".png";


    playerOneDice.setAttribute("src",playerOne);
    playerTwoDice.setAttribute("src",playerTwo);

    if(player1===player2){
        result.textContent="its draw";
    }

    else if(player1>player2){
        result.textContent="player1 won";
    }
    
    else{
        result.textContent="player2 won";
    }

}









