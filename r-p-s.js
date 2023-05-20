function getComputerChoice(){
    choice=Math.floor(Math.random()*100);
    if(choice>=0&&choice<=33)choice="rock";
    else if(choice>33&&choice<=66)choice="paper";
    else if(choice>66&&choice<=100)choice="scissors";
    return choice;
}
//ok
function round(playerSelection, computerSelection){

//draw
if(playerSelection===computerSelection)return "Draw!";
//win
if(playerSelection==="rock"&&computerSelection==="scissors")return "You won!";
if(playerSelection==="paper"&&computerSelection==="rock")return "You won!";
if(playerSelection==="scissors"&&computerSelection==="paper")return "You won!";
//loss
if(playerSelection==="rock"&&computerSelection==="paper")return "You lost";
if(playerSelection==="paper"&&computerSelection==="scissors")return "You lost";
if(playerSelection==="scissors"&&computerSelection==="rock")return "You lost!";
}

function game(){
    win=0;
    loss=0;
    for(let i=1;i<=5;i++){
      const computerSelection=getComputerChoice();
      let playerSelection=prompt("What is your weapon?");
        playerSelection=playerSelection.toLowerCase();
      round(playerSelection, computerSelection);
        
      {
        if(round(playerSelection, computerSelection)==="You won!")win++;
        if(round(playerSelection, computerSelection)==="You lost!")loss++;}
    }
    if(win>loss)console.log("YOU WON THE GAME!");
    if(win<loss)console.log("YOU LOST THE GAME!");
    if(win==loss)console.log("IT'\S A DRAW!");
}
console.log(game())