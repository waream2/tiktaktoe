const player = (name) => {
    return {name}
};

const createGameBoard = (() => {
    let gameBoard = ['','','',
                    '','','',
                    '','',''];  
    return {gameBoard}  
})();

const displayController = (() => {

    let start = document.getElementById("start")
    let reset = document.getElementById("resetButton");
    let newGame = document.getElementById("play-again")
    let inputFirst = document.getElementById("first-player")
    let inputSecond = document.getElementById("second-player")
    
    let playerOne = ""
    let playerTwo = ""

    function firstPlayerWins() {
        document.getElementById("resultsDisplay").classList.remove("hidden")
        document.getElementById("winner").innerHTML = `${playerOne["name"]}<br> wins!` 
        document.getElementById("boardHome").classList.add("hidden");
    };

    function secondPlayerWins() {
        document.getElementById("resultsDisplay").classList.remove("hidden")
        document.getElementById("winner").innerHTML = `${playerTwo["name"]} wins!` 
        document.getElementById("boardHome").classList.add("hidden");
    };
    
    function noOneWins() {
        document.getElementById("resultsDisplay").classList.remove("hidden")
        document.getElementById("winner").innerHTML = `It's a tie, play again` 
        document.getElementById("boardHome").classList.add("hidden");
    }

    let spaces = [];
    let check = true;
        for (let i = 0; i < 9; i++) {
            spaces[i] = document.getElementById("grid" + i);
            
            spaces[i].addEventListener("click", (event) => {
                if (createGameBoard.gameBoard[i] == "" && check == true) {
                    createGameBoard.gameBoard[i] = "X";
                    spaces[i].textContent = createGameBoard.gameBoard[i];
                    check = false;
                        if (createGameBoard.gameBoard[0] == "X" && createGameBoard.gameBoard[1] == "X" && createGameBoard.gameBoard[2] == "X") {
                            // alert("Player One Wins")
                            firstPlayerWins();
                        } else if (createGameBoard.gameBoard[0] == "X" && createGameBoard.gameBoard[4] == "X" && createGameBoard.gameBoard [8] == "X") {
                            firstPlayerWins();
                        } else if (createGameBoard.gameBoard[0] == "X" && createGameBoard.gameBoard[3] == "X" && createGameBoard.gameBoard [6] == "X") {
                            firstPlayerWins();
                        //break up
                        } else if (createGameBoard.gameBoard[3] == "X" && createGameBoard.gameBoard[4] == "X" && createGameBoard.gameBoard [5] == "X") {
                            firstPlayerWins();
                        } else if (createGameBoard.gameBoard[0] == "X" && createGameBoard.gameBoard[3] == "X" && createGameBoard.gameBoard [6] == "X") {
                            firstPlayerWins();
                        } else if (createGameBoard.gameBoard[6] == "X" && createGameBoard.gameBoard[7] == "X" && createGameBoard.gameBoard [8] == "X") {
                            firstPlayerWins();
                        //break up
                        } else if (createGameBoard.gameBoard[1] == "X" && createGameBoard.gameBoard[4] == "X" && createGameBoard.gameBoard [7] == "X") {
                            firstPlayerWins();
                        } else if (createGameBoard.gameBoard[2] == "X" && createGameBoard.gameBoard[5] == "X" && createGameBoard.gameBoard [8] == "X") {
                            firstPlayerWins();
                        } else if (createGameBoard.gameBoard[2] == "X" && createGameBoard.gameBoard[4] == "X" && createGameBoard.gameBoard [6] == "X") {
                            firstPlayerWins();
                        } 
                        //tie logic
                        else if (createGameBoard.gameBoard[0] != '' && createGameBoard.gameBoard[1] != '' && createGameBoard.gameBoard[2] != '' &&  createGameBoard.gameBoard[3] != '' && createGameBoard.gameBoard[4] != ''  && createGameBoard.gameBoard[5] != '' && createGameBoard.gameBoard[6] != '' && createGameBoard.gameBoard[7] != '' && createGameBoard.gameBoard[8] != '') {
                            noOneWins()
                        };
                      
                }

                else if (createGameBoard.gameBoard[i] == "" && check == false) {
                    createGameBoard.gameBoard[i] = "O"
                    spaces[i].textContent = createGameBoard.gameBoard[i];
                    check = true;
                        if (createGameBoard.gameBoard[0] == "O" && createGameBoard.gameBoard[1] == "O" && createGameBoard.gameBoard[2] == "O") {
                            secondPlayerWins()
                        } else if (createGameBoard.gameBoard[0] == "O" && createGameBoard.gameBoard[4] == "O" && createGameBoard.gameBoard [8] == "O") {
                            secondPlayerWins()
                        } else if (createGameBoard.gameBoard[0] == "O" && createGameBoard.gameBoard[3] == "O" && createGameBoard.gameBoard [6] == "O") {
                            secondPlayerWins()
                        //break up
                        } else if (createGameBoard.gameBoard[3] == "O" && createGameBoard.gameBoard[4] == "O" && createGameBoard.gameBoard [5] == "O") {
                            secondPlayerWins()
                        } else if (createGameBoard.gameBoard[0] == "O" && createGameBoard.gameBoard[3] == "O" && createGameBoard.gameBoard [6] == "O") {
                            secondPlayerWins()
                        } else if (createGameBoard.gameBoard[6] == "O" && createGameBoard.gameBoard[7] == "O" && createGameBoard.gameBoard [8] == "O") {
                            secondPlayerWins()
                        //break up
                        } else if (createGameBoard.gameBoard[1] == "O" && createGameBoard.gameBoard[4] == "O" && createGameBoard.gameBoard [7] == "O") {
                            secondPlayerWins()
                        } else if (createGameBoard.gameBoard[2] == "O" && createGameBoard.gameBoard[5] == "O" && createGameBoard.gameBoard [8] == "O") {
                            secondPlayerWins()
                        } else if (createGameBoard.gameBoard[2] == "O" && createGameBoard.gameBoard[4] == "O" && createGameBoard.gameBoard [6] == "O") {
                            secondPlayerWins()
                        }
                        //tie logic
                        else if (createGameBoard.gameBoard[0] != '' && createGameBoard.gameBoard[1] != '' && createGameBoard.gameBoard[2] != '' &&  createGameBoard.gameBoard[3] != '' && createGameBoard.gameBoard[4] != ''  && createGameBoard.gameBoard[5] != '' && createGameBoard.gameBoard[6] != '' && createGameBoard.gameBoard[7] != '' && createGameBoard.gameBoard[8] != '') {
                            noOneWins()
                        };
                }
        });

    
        inputFirst.addEventListener("input", (event) => {
            // if (inputFirst.value.length == 0 || inputSecond.value.length == 0) {
            //     start.disabled = true;     
            // }
            if (inputFirst.value.length > 0 && inputSecond.value.length > 0)
                start.disabled = false;
        });

        inputSecond.addEventListener("input", (event) => {
            // if (inputFirst.value.length == 0 || inputSecond.value.length == 0) {
            //     start.disabled = true;     
            // }
            if (inputFirst.value.length > 0 && inputSecond.value.length > 0)
                start.disabled = false;
    });

    
        

    start.addEventListener("click", (event) => {
        if(inputFirst.value == "" || inputSecond.value == ""){
            alert("Please enter a value")
            return;
        };
        playerOne = player(inputFirst.value)
        playerTwo = player(inputSecond.value)
        document.getElementById("boardHome").classList.remove("hidden");
        document.getElementById("panel").classList.add("hidden");
        document.getElementById("resetButton").classList.remove("hidden");
        newGame.classList.remove("hidden");
    });

    reset.addEventListener("click", (event) => {
        for (let p = 0; p < 9; p++) {
            spaces[p].innerHTML = "";
            createGameBoard.gameBoard[p] = "";
            document.getElementById("boardHome").classList.add("hidden");
            document.getElementById("resetButton").classList.add("hidden");
            document.getElementById("panel").classList.remove("hidden");
            inputFirst.value = ""
            inputSecond.value = ""
            playerOne = ""
            playerTwo = ""
            document.getElementById("resultsDisplay").classList.add("hidden")
            document.getElementById("winner").innerHTML = ""
            newGame.classList.add("hidden")
            check = true;
        };             
    });

    newGame.addEventListener("click", (event) => {
        for (let p = 0; p < 9; p++) {
            spaces[p].innerHTML = "";
            createGameBoard.gameBoard[p] = "";
            document.getElementById("boardHome").classList.remove("hidden");
            document.getElementById("resultsDisplay").classList.add("hidden");
        }
    });


                
        };
        
    

   
    return {spaces, playerOne, playerTwo}
})();













    








