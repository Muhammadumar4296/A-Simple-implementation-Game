
     // >>>>>>>>>>>>>>>>>>  Rock Paper Scissors Game, <<<<<<<<<<<<<<<<<<<<<<<<<<<<
       
    import inquirer from "inquirer"

    let players =await inquirer.prompt([
        {
            name: "player1",
            type: "input",
            message: "player 1, Enter your name",
        },
        {
            name: "player2",
            type: "input",
            message: "player 2, Enter your name",
        },
        ]);
        
    let game = await inquirer.prompt([
            {
                name: "player1",
                type: "list",
                message: `${players.player1}, choose one!`, 
                choices: ["Shafiqe", "Salman", "Adeel"]
            }
        ]);
        
        if (game.player1 === game.player2) {
            console.log( "It's a tie !");
        
        }else if ((game.player1 === "Shafiqe" && game.player2 === "Salman") ||
        (game.player1 === "Salman" && game.player2 === "Adeel") ||
          (game.player1 === "Adeel" && game.player2 === "Shafiqe")){
            console.log("player 1 Shafiqe wins !");
        }else {
            console.log("player 2 Salman wins !");
        }    
        



