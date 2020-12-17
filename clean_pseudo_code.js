// You are starting a landscaping business, but all you have are your teeth.
// Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
/*

PSEUDO CODE

    THIS GAME CAN BE SUMMED UP JUST A FEW REPETITIVE STEPS:
        -CUT LAWN
        -CHECK BALANCE
        -BUY NEXT TOOL
        -REPEAT
        -THEN USER WINS

    THE QUESTION IS HOW DO I DO THOSE STEPS.
    -CUT LAWN WILL BE A FUNCTION THAT LOOPS OVER THE "PROCESS OF CUTTING THE LAWN" WHICH IS ACTUALLY JUST ALERTING THE USER THEY CUT THE LAWN, ADDING THE CORRESPONDING MONEY TO THE ACCOUNT BALANCE, AND ASKING THE USER IF THEY WANT TO REPEAT THIS STEP. IF THE USER HAS ENOUGH MONEY I CAN ASK THEM IF THEY WANT TO BUY THE NEXT TOOL


MOCK CODE
    -THIS COVERS CUTTING THE LAWN, UPDATING THE ACCOUNT BALANCE, AND UPGRADING TOOLS
        let currentTool = toolsArray[0];
        let payment = toolPayment[0];
        const toolCost = []
        const cutLawn = () => {
            accountBalance += payment;
            if(accountBalance >= toolCost++) {
                let toolPrompt = prompt('You have enough money to buy the next tool. Would you like to buy the next tool?');
                if(toolPrompt === 'yes') {
                    currentTool++ 
                } else {
                    cutLawn();
                }
            }
            let response = prompt('you cut one lawn and got paid' + payment '. Would you like to cut another?', 'yes or no');   => payment = toolPayment[]
                if(response === 'yes') {
                    cutLawn();
                } else {
                    alert('sorry you are broke and cannot refuse this job');
                    cutLawn();
                }
        }





    OBJECTS 
        -USER
            -ACCOUNT BALANCE
            -TOOLS ARRAY
            -CURRENT TOOL

        const user - {
            accountBalance : 0,
            toolsArray : ['teeth', 'rusty scissors', 'old-timey push lawnmower','battery-powered lawnmower', 'starving students' ],
            toolCost : [0, 5, 25, 250, 500],
            toolPayment : [1, 5, 50, 100, 250]
        }           //Checking current tool
                    const currentTool = user.toolsArray[0]
                    console.log(currentTool);


    CONDITIONALS
        -IS ACCOUNT BALANCE > COST OF NEXT TOOL
            if(user.accountBalance >= user.toolCost[Next Tool]) {
                let response = prompt user (You have enough money to buy next tool, do you want to buy the tool or cut another lawn)
            }
    
    FUNCTIONS
        -START GAME (WHICH MIGHT LEAD INTO CUT LAWN)
            const startingPrompt = () =>{
                confirm('Would you like to start a new game?');
                if(confirm != true) {
                    alert("I'm so sorry, but you are broke and you cannot turn down this job...");
                    startingPrompt();
                } else {
                    const lawnCutting = () => {
                    alert('You successfully cut one lawn with your ' + user.tools[0] + ' and earned $' + user.payment[0] + '.')
                }
        -CUT LAWN
        -CHECK ACCOUNT BALANCE
        -CHECK CURRENT TOOL
        -CHANGE TOOL
        -WINNER
        -RESET
            const reset = () => {
                prompt ('Do you want to play again', yes or no);
                if(prompt === yes) {
                    start game over
                } else {
                    close browser/end game
                }
            }



    FLARE
        -PROMPT USER IF THEY WANT TO CUT ANOTHER LAWN (FUNCTION)
        -PROMPT THE USER THAT THEY HAVE ENOUGH MONEY TO BUY THE NEXT TOOL, ASK IF THEY WANT TO BUY NEXT TOOL OR CUT ANOTHER LAWN (FUNCTION)
        -ALERT USER THEY WON THE GAME (FUNCTION)


*/
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can buy scissors"
// Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.

// 🔴 Commit:
// "Landscaper App: user can use scissors to cut grass"
// At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.

// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can buy push lawnmower"
// Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.

// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can use push lawnmower to cut grass"
// At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money.

// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can buy battery-powered lawnmower"
// Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.

// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can use battery-powered lawnmower to cut grass"
// At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money.

// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can hire a team"
// Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.
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
// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: user can use a team to cut grass"
// You win the game when you have a team of starving students and $1000. In this situation, send a message to the user telling them, they've won.




                // THINGS TO CHECK:

                //     -OWN A TEAM?
                //     -BALANCE > $1K?


                // -DO YOU OWN A TEAM?
                // -YES I OWN A TEAM                                               -NO I DON'T OWN A TEAM
                //     -CHECK ACCOUNT BALANCE                                          -ENOUGH MONEY TO BUY A TEAM?
                //          - BALANCE > $1K?                                                   YES: - GO BUY A TEAM, THEN RECHECK BALANCE
                //             YES: YOU WIN!                                                   NO: - GO MAKE MORE MONEY AND THEN BUY A TEAM
                //             NO: KEEP CUTTING GRASS UNTIL BALANCE > $1K THEN YOU WIN                 -THEN RECHECK BALANCE
                            

                // THINGS I NEED TO CODE

                //     -CONDITIONALS:
                //         -CHECK TO SEE IF USER OWNS A TEAM
                //         -CHECK TO SEE IF USER HAS > $1K
                //         -FINAL CHECK TO SEE IF THEY HAVE BOTH AT SAME TIME (MIGHT BE ABLE TO COMBINE BOTH CHECKS AT ONCE)

                //     -VARIABLES
                //         -ACCOUNT BALANCE  (balance)
                //         -STATUS OF TEAM (statusOfTeam)

                //     -LOOPS
                //         -I NEED TO KEEP CHECKING IF THE USER HAS A TEAM
                //             -I PROBABLY ONLY NEED TO CHECK THIS IF THEIR BALANCE > $1K
                //         -I NEED TO KEEP CHECKING THE VALUE OF BALANCE

                //     -FUNCTIONS
                //         -SEE IF USER OWNS A TEAM
                //         -SEE WHAT THEIR BALANCE IS
                //         -VICTORY ALERT MESSAGE

                //     -DATA TYPES
                //         -BOOLEAN (team ownership)
                //         -NUMBER (value of balance)

                //     -FINAL MESSAGE TO USER
                //         -YOU WIN! (alert('Congratulations, You Win!'))



                // THINGS TO KEEP IN MIND (POSSIBLE ROAD BLOCKS)
                //     - N/A


                // MOCK CODE
                //     -CHECK TO SEE IF PLAYER OWNS A TEAM:
                //             const teamOwner = false;
                //             const teamOwnership = () => {
                //                 if(teamOwner != true && account >= 1000) {
                //                     teamOwner = true;
                //                 } else{
                //                     loop back and continue cutting grass
                //                     }
                //                 }

                //     -ASSUME PLAYER OWNS TEAM - CHECK ACCOUNT BALANCE
                //             const teamOwner = true;
                //             const checkBalance = () => {
                //                 if(balance >= 1000) {
                //                     alert('Congratulations you win!);
                //                 } else {
                //                     call cutting grass function and loop back to continue doing that
                //                         (I should probably have a if conditional in my cutting grass function that checks balance and keeps buying the next tool when the balance is high enough)
                //                 }
                //             }

                //     -FINAL FUNCTION (might be able to combine all three of these into one)
                //             -CHECK TO SEE IF BOTH CONDITIONS ARE TRUE
                //                 const userWins = () => {
                //                     if(teamOwner === true && account >= 1000) {
                //                         alert('Congrats you win!); 
                //                         alert('Want to play again?', resetFunction());
                //                     } else {
                //                         run teamOwnership();
                //                         run checkBalance();
                //                         run userWins();
                //                     }
                //                 }
                //     -RESET THE GAME FUNCTION
                //                 const reset = () => {
                //                     prompt ('Do you want to play again', yes or no);
                //                     if(prompt === yes) {
                //                         start game over
                //                     } else {
                //                         close browser/end game
                //                     }
                //                 }


// 🔴 Commit your work!
// Your commit message should read something like:
// "landscaper: win scenario"
// Deliverables
// For this section of the homework, inside the landscaper folder you should have an index.html and app.js that simulates the landscaper game outlined above. Your app must have:

// The ability to take user input
// The ability for the user to earn money
// The ability to buy tools and use the new tool
// The ability to win the game and end it
// Hint: Try setting the win amount to $10 frst, then $50, and etc. until you get to the end to allow for easier testing!


















// const myArray = [0,1,2,3];
// let currentIndex = myArray[0]
// currentIndex ++;
// console.log(currentIndex);
// currentIndex++
// console.log(currentIndex);




// let currentTool = toolsArray[0];
// let payment = toolPayment[0];
// const toolCost = []
// const cutLawn = () => {
//     accountBalance += payment;
//     if(accountBalance >= toolCost++) {
//         let toolPrompt = prompt('You have enough money to buy the next tool. Would you like to buy the next tool?');
//         if(toolPrompt === 'yes') {
//             currentTool++ 
//         } else {
            // cutLawn();
