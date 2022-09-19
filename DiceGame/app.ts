let diceInput=document.getElementById('diceImg')! as HTMLInputElement;
let score1=document.getElementById('score1')! as HTMLInputElement;
let score2=document.getElementById('score2')! as HTMLInputElement;
let btnRollDice=document.getElementById('btnRollDice')! as HTMLInputElement;
let playerTurnMsg=document.getElementById('playerTurnMsg')! as HTMLInputElement;
playerTurnMsg.innerText="PLAYER 1 IS PLAYING NOW";
let display1=document.getElementById('display1')! as HTMLInputElement;
display1.style.backgroundColor="#f71414";
let display2=document.getElementById('display2')! as HTMLInputElement;
let turn:string="";
let totalScore1:number=0;
let totalScore2:number=0;



btnRollDice.addEventListener('click',()=>
{
  let diceNum:number=Math.ceil((Math.random()*6));
  diceInput.innerHTML="<img src='Img/"+diceNum+".png' class='img-fluid imgDice' alt='dice'/>";
  if(diceNum==1)
  {
    turn=switchPlayer(turn);
    if(turn==='player2')
    {
      playerTurnMsg.innerText="PLAYER 2 IS PLAYING NOW";
      display1.style.backgroundColor="";
      display2.style.backgroundColor="#f71414";
    }
    else
    {

      playerTurnMsg.innerText="PLAYER 1 IS PLAYING NOW";
      display2.style.backgroundColor="";
      display1.style.backgroundColor="#f71414";
    }
    
  }
  else if(diceNum!=1 && turn==='player1' || diceNum!=1 && turn==='')
  {
     let gtScore=addPlayersScore1(diceNum);
     if(gtScore>=50)
     {
      let msg=document.getElementById('msg')! as HTMLInputElement;
      msg.innerText="PLAYER 1 WON";
      setTimeout(() => {
        window.location.reload();
      }, 3000);
     }
  }
  else if(diceNum!=1 && turn==='player2')
  {
     let gtScore=addPlayersScore2(diceNum);
     if(gtScore>=50)
     {
      let msg=document.getElementById('msg')! as HTMLInputElement;
      msg.innerText="PLAYER 2 WON";
      setTimeout(() => {
        window.location.reload();
      }, 3000);
     }
  }

});

function switchPlayer(turn:string):string
{
 
  if(turn==='player1' || turn==='')
  {
    turn='';
    turn='player2';
    return turn;
  }
  else
  {
    turn='';
    turn='player1';
    return turn;
  }

}

function addPlayersScore1(diceNum:number):number
{
   totalScore1+=diceNum;
   score1.innerText=totalScore1.toString();
     return totalScore1;
 
}

function addPlayersScore2(diceNum:number):number
{
   totalScore2+=diceNum;
    score2.innerText=totalScore2.toString();
   return totalScore2;
  
}