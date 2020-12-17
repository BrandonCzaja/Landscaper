/*

IN PROMPT ASK USER TWO QUESTIONS - DO YOU WANT TO CUT LAWN AGAIN OR UPGRADE TOOLS 






MOCK CODE



        - CUT GRASS
            const cutGrass = () => {
                while (balance < price of next tool){
                    balance += payment of current tool
                    display amount of lawns cut
                    display balance
                }
            }

-RESET THE GAME
            const reset = () => {
                prompt('Would you like to start a new game?', 'yes or no')
                if(prompt input === yes) => start new game (call start function)
                    (prompt input === no) => close window
                    (prompt input === other) => alert('Sorry your input of ' + input + 'is not valid, try again.')
            }


*/
//////////////////////////////////////// END: GENERAL PSEUDO CODE ///////////////////////////////////////////////////












///////////////////////////////////////// PSEUDO CODE FOR USER USING TEETH //////////////////////////////////////////////////////
/*  
    FUNCTIONS

            -STARTING FUNCTION
            const start = () => {
                prompt('Would you like to start a new game?', 'yes or no');
                if(prompt input === yes) {
                    start game
                        let balance = 0;
                        let pay = toolPayment[toolPayment(teeth)];  (I will have to declare the objects before running this function, probably global area)
                        for(continuously cut grass until accountBalance >= 5) {
                            for each iteration accountBalance += toolPayment[currentTool]
                        }
                } else {
                    close browser
                }
            }


            -CHANGING TOOLS - SEE IF I CAN DO A SWITCH STATEMENT FOR THIS INSTEAD OF ALL THE IF STATEMENTS - should only have to write this once then just call it
                const changeTool = () => {   
                if(currentTool === currentToolArray[0]){
                    if(accountBalance >= toolCost[scissors]){
                        currentTool = currentToolArray[1];
                        payment = toolPayment(scissors);
                    } else {
                        currentTool = currentToolArray[0];
                    }
                }

                if(currentTool === currentToolArray[1]) {
                    if(accountBalance >= toolCost[pushMower]) {
                        currentTool = currentToolArray[2]
                        payment = toolPayment(pushMower);
                    } else {
                        currentTool = currentToolArray[1];
                    }
                }

                if(currentTool === currentToolArray[2]) {
                    if(accountBalance >= toolCost[pushMower]) {
                        currentTool = currentToolArray[3]
                        payment = toolPayment(batteryMower);
                    } else {
                        currentTool = currentToolArray[2]
                    }
                }      
                
                if(currentTool === currentToolArray[3]) {
                    if(accountBalance >= toolCost[batteryMower]) {
                        currentTool = currentToolArray[4];
                        payment = toolPayment(students);
                    } else {
                        currentTool = currentToolArray[3];
                    }
                }
            }



*/
//////////////////////////////////////// END PSEUDO CODE FOR USER USING TEETH ///////////////////////////////////////////////////
///////////////////////////////////////// ACTUAL START TO CODING ///////////////////////////////////////////////////////////////

//Starting Prompt - Don't delete keep as actual code
const startingPrompt = () =>{
    //Asks the user if they want to start a new game
    confirm('Would you like to start a new game?');
    //If user clicks Cancel I force them to start a new one
    if(confirm != true) {
        alert("I'm so sorry, but you are broke and you cannot turn down this job...");
        startingPrompt();
    } else {
            //LAWN CUTTING 
            const lawnCutting = () => {
                alert('You successfully cut one lawn with your ' + user.tools[0] + ' and earned $' + user.payment[0] + '.')
            }



//USER
const user = {
tools : ['teeth', 'rusty scissors', 'push lawnmower', 'battery-powered lawnmower', 'team of starving students'],
costs : [0, 5, 25, 250, 500],
payment : [1, 5, 50, 100, 250],
balance : 0
}  

//Set Base values for variables
let currentTool = user.tools[0];


//Lawn cutting / payment / 




const payment = () => {
if(lawnCutting === true) {  //There is probably a different way to write this conditional
if(currentTool === toolArray[0]) {
    accountBalance += toolPayment.teeth;
} else if (currentTool === toolArray[1]) {
    accountBalance += 5;
} else if (currentTool === toolArray[2]) {
    accountBalance += 50;
} else if (currentTool === toolArray[3]) {
    accountBalance += 100;
} else {
    accountBalance += 250;
}
}
}


// Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can use teeth to cut grass"

















//Global Variables
//USER


//Cutting Grass













// At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can buy scissors"










































































///////////////////////////////////////// PSEUDO CODE FOR USER USING SCISSORS //////////////////////////////////////////////////////


//////////////////////////////////////// END PSEUDO CODE FOR USER USING SCISSORS ///////////////////////////////////////////////////
// Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.
// 🔴 Commit:
// "Landscaper App: user can use scissors to cut grass"


















































































///////////////////////////////////////// PSEUDO CODE FOR USER BUYING PUSH LAWNMOWER //////////////////////////////////////////////////////


//////////////////////////////////////// END PSEUDO CODE FOR USER BUYING PUSH LAWNMOWER ///////////////////////////////////////////////////
// At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can buy push lawnmower"


































































///////////////////////////////////////// PSEUDO CODE FOR USER USING PUSH LAWNMOWER //////////////////////////////////////////////////////


//////////////////////////////////////// END PSEUDO CODE FOR USER USING LAWNMOWER ///////////////////////////////////////////////////
// Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can use push lawnmower to cut grass"





























































///////////////////////////////////////// PSEUDO CODE FOR USER BUYING BATTER-POWERED LAWNMOWER //////////////////////////////////////////////////////


//////////////////////////////////////// END PSEUDO CODE FOR USER BUYING BATTER-POWERED LAWNMOWER ///////////////////////////////////////////////////
// At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money.
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can buy battery-powered lawnmower"




























































///////////////////////////////////////// PSEUDO CODE FOR USER USING BATTER-POWERED LAWNMOWER //////////////////////////////////////////////////////
//////////////////////////////////////// END PSEUDO CODE FOR USER USING BATTER-POWERED LAWNMOWER ///////////////////////////////////////////////////
// Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can use battery-powered lawnmower to cut grass"





























































///////////////////////////////////////// PSEUDO CODE FOR USER HIRING TEAM //////////////////////////////////////////////////////
/*
*/
//////////////////////////////////////// END PSEUDO CODE FOR USER HIRING TEAM ///////////////////////////////////////////////////
// At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money.
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can hire a team"




























































///////////////////////////////////////// PSEUDO CODE FOR USER USING TEAM TO CUT GRASS //////////////////////////////////////////////////////
/*
STAGE OF THE GAME:
-USER OWNS A TEAM
-ACCOUNT BALANCE += 250 FOR EACH LAWN CUT (loop)


CONDITIONALS TO CHECK:
-THERE AREN'T REALLY ANY CONDITIONALS TO CHECK BECAUSE AT THIS POINT OF THE GAME THEY HAVE THE TEAM 
-I COULD MERGE A FINAL CONDITIONAL IN THIS STAGE TO THE BEGINNING OF THE CONDITIONAL CHECK OF THE LAST STAGE (do I own team and balance)
-I GUESS I COULD ASK THE USER IF THEY WANT TO CUT GRASS AS A CONDITIONAL


THINGS I NEED TO CODE
-A LOOP FOR THE BALANCE (declare at start)
-A FUNCTION THAT CONTINUES CUTTING THE GRASS - WHICH ACTUALLY JUST UPDATES BALANCE AND TOOLS (declared in start)




MOCK CODE
-ACCOUNT BALANCE (this function would probably have been declared in step 1)
    const accountBalance = (number) => {
        for(every time I run the cutGrass function){
            balance += pay;
        }
    }
-


*/
//////////////////////////////////////// END PSEUDO CODE FOR USER USING TEAM TO CUT GRASS ///////////////////////////////////////////////////
// Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can use a team to cut grass"




















































































///////////////////////////////////////// PSEUDO CODE FOR USER WINNING THE GAME //////////////////////////////////////////////////////
/* 
THINGS TO CHECK:

    -OWN A TEAM?
    -BALANCE > $1K?


-DO YOU OWN A TEAM?
-YES I OWN A TEAM                                               -NO I DON'T OWN A TEAM
    -CHECK ACCOUNT BALANCE                                          -ENOUGH MONEY TO BUY A TEAM?
         - BALANCE > $1K?                                                   YES: - GO BUY A TEAM, THEN RECHECK BALANCE
            YES: YOU WIN!                                                   NO: - GO MAKE MORE MONEY AND THEN BUY A TEAM
            NO: KEEP CUTTING GRASS UNTIL BALANCE > $1K THEN YOU WIN                 -THEN RECHECK BALANCE
            

THINGS I NEED TO CODE

    -CONDITIONALS:
        -CHECK TO SEE IF USER OWNS A TEAM
        -CHECK TO SEE IF USER HAS > $1K
        -FINAL CHECK TO SEE IF THEY HAVE BOTH AT SAME TIME (MIGHT BE ABLE TO COMBINE BOTH CHECKS AT ONCE)

    -VARIABLES
        -ACCOUNT BALANCE  (balance)
        -STATUS OF TEAM (statusOfTeam)

    -LOOPS
        -I NEED TO KEEP CHECKING IF THE USER HAS A TEAM
            -I PROBABLY ONLY NEED TO CHECK THIS IF THEIR BALANCE > $1K
        -I NEED TO KEEP CHECKING THE VALUE OF BALANCE

    -FUNCTIONS
        -SEE IF USER OWNS A TEAM
        -SEE WHAT THEIR BALANCE IS
        -VICTORY ALERT MESSAGE

    -DATA TYPES
        -BOOLEAN (team ownership)
        -NUMBER (value of balance)

    -FINAL MESSAGE TO USER
        -YOU WIN! (alert('Congratulations, You Win!'))



THINGS TO KEEP IN MIND (POSSIBLE ROAD BLOCKS)
    - N/A


MOCK CODE
    -CHECK TO SEE IF PLAYER OWNS A TEAM:
            const teamOwner = false;
            const teamOwnership = () => {
                if(teamOwner != true && account >= 1000) {
                    teamOwner = true;
                } else{
                    loop back and continue cutting grass
                    }
                }

    -ASSUME PLAYER OWNS TEAM - CHECK ACCOUNT BALANCE
            const teamOwner = true;
            const checkBalance = () => {
                if(balance >= 1000) {
                    alert('Congratulations you win!);
                } else {
                    call cutting grass function and loop back to continue doing that
                        (I should probably have a if conditional in my cutting grass function that checks balance and keeps buying the next tool when the balance is high enough)
                }
            }

    -FINAL FUNCTION (might be able to combine all three of these into one)
            -CHECK TO SEE IF BOTH CONDITIONS ARE TRUE
                const userWins = () => {
                    if(teamOwner === true && account >= 1000) {
                        alert('Congrats you win!); 
                        alert('Want to play again?', resetFunction());
                    } else {
                        run teamOwnership();
                        run checkBalance();
                        run userWins();
                    }
                }
    -RESET THE GAME FUNCTION
                const reset = () => {
                    prompt ('Do you want to play again', yes or no);
                    if(prompt === yes) {
                        start game over
                    } else {
                        close browser/end game
                    }
                }

*/
//////////////////////////////////////// END PSEUDO CODE FOR USER WINNING THE GAME ///////////////////////////////////////////////////
// You win the game when you have a team of starving students and $1000. In this situation, send a message to the user telling them, they've won.
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: win scenario"




///////////////////////////////////////////////////////// CLASS NOTES W3D2 OBJECTS ////////////////////////////////////////////////////////////////////////////
/*

-PROMPT 
-let userInput = prompt('What do you want to do')
-cut lawn, upgrade tools, etc

......maybe I should prompt every time the lawn gets cut... say what do you want to do - upgrade tool or cut lawn again



PROMPT VARIABLE
                let response = prompt(`You have ${accountBalance   or   user.wallet}` `dollars, what would you like to do?`, cut grass upgrade tool).toLowerCase();







*/