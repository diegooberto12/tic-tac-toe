let tic_tt = [null,null,null,
               null,null,null,
               null,null,null    ];
player1 = "X";
player2="O";
let currentPlayer= null;



const tictactoe1 = document.querySelector(".uno");
const tictactoe2 = document.querySelector(".dos");
const tictactoe3 = document.querySelector(".tres");
const tictactoe4 = document.querySelector(".cuatro");
const tictactoe5 = document.querySelector(".cinco");
const tictactoe6 = document.querySelector(".seis");
const tictactoe7 = document.querySelector(".siete");
const tictactoe8 = document.querySelector(".ocho");
const tictactoe9 = document.querySelector(".nueve");
const btnReset = document.querySelector(".reset-game")
function turnChange(){
currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1;
}
function startgame(){
currentPlayer=player1;
}

function selection(actualplayer,array_select){
    if (tic_tt[array_select] != null)
   {alert("You can't select that tile") }
    else
    {tic_tt[array_select]= actualplayer;

        switch (array_select){
        case (0):
            tictactoe1.textContent = `${currentPlayer}`;
            break;
        case (1):
            tictactoe2.textContent = `${currentPlayer}`;
            break;
        case (2):
            tictactoe3.textContent = `${currentPlayer}`;
            break;
        case (3):
            tictactoe4.textContent = `${currentPlayer}`;
            break;
        case (4):
            tictactoe5.textContent = `${currentPlayer}`;
            break;
        case (5):
            tictactoe6.textContent = `${currentPlayer}`;
            break;
        case (6):
            tictactoe7.textContent = `${currentPlayer}`;
            break;
        case (7):
            tictactoe8.textContent = `${currentPlayer}`;
            break;
        case (8):
            tictactoe9.textContent = `${currentPlayer}`;
            break;
    }
    }
    turnChange()
    Check4Win(tic_tt)
    
};


function Check4Win(){
if (tic_tt[0 == currentPlayer] && tic_tt[1]== currentPlayer && tic_tt[2 == currentPlayer]){
alert("gano");
}

}
startgame();
turnChange();
console.log(currentPlayer);
