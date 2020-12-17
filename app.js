//Notes
/*
 
        BUGS
            -WHEN I DON'T CUT ANOTHER LAWN IN PUSH MOWER I CAN'T GET BACK INTO THE FUNCTION
                -IT WORKS ONCE WITH THE BATTERY MOWER THEN CRASHES
            -I CAN'T GET THE BUTTONS TO DISABLE / ENABLE WITH THE DOM
                -I THINK THE PAGES AREN'T TALKING AT THE DOM LEVEL
            -IF THE PLAYER DOESN'T TYPE THEIR RESPONSE EXACTLY AS PROMPTED IT DOES NOT BUY THE NEXT TOOL
                -I KNOW I NEED .toUpperCase() BUT I WAS HAVING TROUBLE GETTING IT TO WORK
*/

//GLOBAL VARIABLES
const player = {
  tools: [
    "teeth",
    "rusty scissors",
    "push lawnmower",
    "battery-powered lawnmower",
    "students",
  ],
  toolCost: [0, 5, 25, 250, 500],
  toolPayment: [1, 5, 50, 100, 500],
};

let balance = 0;
let currentTool = player.tools[0];
let payment = player.toolPayment[0];
let toolOwnership = currentTool;
let cost = 0;

//CUT LAWN WITH TEETH
const cutLawnWithTeeth = () => {
  cost += player.toolCost[1];
  console.log("Balance = $" + balance);

  for (let i = balance; i <= cost; i++) {
    balance += player.toolPayment[0];
    console.log("My new balance is $" + balance);
    let userInput = confirm(
      "You cut one lawn with your teeth and earned $" +
        player.toolPayment[0] +
        ". Your balance is $" +
        balance +
        ". Would you like to cut another lawn?"
    );

    if (userInput === true) {
      console.log("Your new balance is $" + balance);
    } else {
      console.log("Your jaw is tired and needs a break.");
      alert("Your jaw is tired and needs a break");
      break;
    }

    if (balance >= player.toolCost[1]) {
      let input = prompt(
        "You have enough money to buy " +
          player.tools[1] +
          " for $" +
          player.toolCost[1] +
          ". Would you like to buy a pair of " +
          player.tools[1] +
          "?",
        "yes or no"
      );
      if (input === "yes") {
        balance -= player.toolCost[1];
        alert("Your new balance is $" + balance);
        cutLawnWithScissors();
        break;
      }
    }
  }
};

//CUT LAWN WITH SCISSORS
const cutLawnWithScissors = () => {
  cost += player.toolCost[1];

  for (let i = balance; i <= cost; i++) {
    balance += player.toolPayment[1];
    console.log("My new balance is $" + balance);
    let userInput = confirm(
      "You cut one lawn with your scissors and earned $" +
        player.toolPayment[1] +
        ". Your balance is $" +
        balance +
        ". Would you like to cut another lawn?"
    );

    if (userInput === true) {
      console.log("Your new balance is $" + balance);
    } else {
      alert("Player is eating their lunch");
      break;
    }

    if (balance >= player.toolCost[2]) {
      let input = prompt(
        "You have enough money to buy a " +
          player.tools[2] +
          " for $" +
          player.toolCost[2] +
          ". Would you like to buy a " +
          player.tools[2] +
          "?",
        "yes or no"
      );
      if (input === "yes") {
        balance -= player.toolCost[2];
        cutLawnWithPushMower();
        break;
      }
    }
  }
};

//CUT LAWN WITH PUSH MOWER
const cutLawnWithPushMower = () => {
  cost = player.toolCost[2];

  for (let i = balance; i <= cost; i++) {
    balance += player.toolPayment[2];
    console.log("My balance is $" + balance);
    let input = confirm(
      "You cut one lawn with your " +
        player.tools[2] +
        " and earned $" +
        player.toolPayment[2] +
        ". Your balance is $" +
        balance +
        ". Would you like to cut another lawn?"
    );

    if (input === true) {
      console.log(balance);
    } else {
      alert("Giving up already? But there are so many lawns left to be cut.");
      break;
    }

    if (balance >= player.toolCost[3]) {
      let reply = prompt(
        "You have enough money to buy a " +
          player.tools[3] +
          " for $" +
          player.toolCost[3] +
          ". Would you like to buy a " +
          player.tools[3] +
          " for $" +
          player.toolCost[3] +
          "?",
        "yes or no"
      );
      if (reply === "yes") {
        balance -= player.toolCost[3];
        cutLawnWithBatteryMower();
        break;
      }
    }
  }
};

//CUT LAWN WITH BATTERY MOWER
const cutLawnWithBatteryMower = () => {
  currentTool = player.tools[3];
  payment = player.toolPayment[3];
  cost = player.toolCost[3];
  balance += payment;

  for (let i = balance; i <= cost; i++) {
    console.log("My balance before loop $" + balance);
    console.log("Current Balance: $" + balance);
    let input = confirm(
      "You cut one lawn with your " +
        currentTool +
        " and earned $" +
        payment +
        ". Your balance is $" +
        balance +
        ". Would you like to cut another lawn?"
    );

    if (input === true) {
      balance += player.toolPayment[3];
      console.log("I don't have students and my balance is " + balance);
    } else {
      console.log(
        "Player decided to not cut anymore lawns today. Your balance is $" +
          balance +
          "."
      );
      alert("Don't quit on me now. You are so close to winning.");
      break;
    }

    if (balance >= player.toolCost[4]) {
      let reply = prompt(
        "Your current balance is $" +
          balance +
          ". You have enough money to hire some " +
          player.tools[4] +
          ". Would you like to hire some " +
          player.tools[4] +
          " for $" +
          player.toolCost[4] +
          "?",
        "yes or no"
      );

      if (reply == "yes") {
        currentTool = player.tools[4];
        console.log("Your current tool is " + currentTool);
        balance -= player.toolCost[4];
        console.log("Your balance is " + balance);
        payment = player.toolPayment[4];
        console.log("your current payment is " + payment);
        alert(
          "Congratulations! You hired some " +
            currentTool +
            " to cut lawns for you. Your current balance is $" +
            balance
        );
        console.log("Current Balance is: " + balance);
        cutLawnWithStudents();
        //document.getElementById('#battery').setAttribute('disabled', 'disabled');
        break;
      }
    }
  }
};

//CUT LAWN WITH STUDENTS
const cutLawnWithStudents = () => {
  for (let i = balance; i < 1000; i++) {
    balance += player.toolPayment[4];
    console.log(balance);

    if (balance >= 1000) {
      console.log("Your balance is $" + balance + ".");
      alert(
        "Your current balance is $" +
          balance +
          ". You have a group of students and $1000 or more in your account. Congratulations you win!"
      );
      console.log("You hired students and have $1000. You win!");
      break;
    } else {
      let input = confirm(
        "Your " +
          player.tools[4] +
          " cut one lawn and earned you $" +
          player.toolPayment[4] +
          ". Your balance is $" +
          balance +
          ". Would you like to have them cut another?"
      );

      if (input === true) {
        console.log(balance);
      } else {
        console.log(
          "You declined to cut another lawn. Your balance is $" + balance + "."
        );
        alert(
          "You gave your students the day off today. You are such a nice boss."
        );
        break;
      }
    }
  }
};
