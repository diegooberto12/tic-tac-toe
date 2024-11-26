let tic_tt = [null,null,null,
               null,null,null,
               null,null,null    ];
player1 = "X";
player2="O";
let currentPlayer= null;



const tictactoe1 = document.querySelector(".1");
const tictactoe2 = document.querySelector(".2");
const tictactoe3 = document.querySelector(".3");
const tictactoe4 = document.querySelector(".4");
const tictactoe5 = document.querySelector(".5");
const tictactoe6 = document.querySelector(".6");
const tictactoe7 = document.querySelector(".7");
const tictactoe8 = document.querySelector(".8");
const tictactoe9 = document.querySelector(".9");

function turnChange(){
currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1;
}
function startgame(){
currentPlayer=player2;
}

function selection(n){
    
    
};

startgame()
turnChange();
console.log(currentPlayer)