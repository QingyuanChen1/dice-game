// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
let lastRoll = 0;
let rollNum = 0;
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

const diceroll = function(){
  const rollNum = getRandomDiceRoll();
  let stringnum = '';
  const elemessage = document.querySelector(`#rollnum`);

  switch(rollNum){
    case 1:
      stringnum = 'One';
      break;
    case 2:
      stringnum = 'Two';
      break;
    case 3:
      stringnum = 'Three';
      break;
    case 4:
      stringnum = 'Four';
      break;
    case 5:
      stringnum = 'Five';
      break;
    case 6:
      stringnum = 'Six';
      break;
  }
  elemessage.textContent = `${stringnum}`;
  const $Face = document.querySelector(`#face`);
  $Face.setAttribute(`src`,`img/dice${rollNum}.svg`);
  $Face.setAttribute(`alt`,`dice${rollNum}`)
  return rollNum
}


function comparison(){
  rollNum =  diceroll()
  if(rollNum > lastRoll){
    document.getElementById('last').innerHTML = `${lastRoll}`
    document.getElementById('now').innerHTML = `${rollNum}`
    document.getElementById('win').innerHTML = `You Win`;
    lastRoll = rollNum;
  }
  else if(rollNum === lastRoll){
    document.getElementById('win').innerHTML = `You Draw`;
    document.getElementById('last').innerHTML = `${lastRoll}`
    document.getElementById('now').innerHTML = `${rollNum}`
    lastRoll = rollNum;
  }
  else{
    document.getElementById('win').innerHTML = `You Lost`;
    document.getElementById('last').innerHTML = `${lastRoll}`
    document.getElementById('now').innerHTML = `${rollNum}`
    lastRoll = rollNum;
  }

}

const eleRoll = document.querySelector(`#roll`)
eleRoll.addEventListener(`click`,diceroll);
eleRoll.addEventListener(`click`, comparison)


// Here's a test roll, check the console!

// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"

// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
