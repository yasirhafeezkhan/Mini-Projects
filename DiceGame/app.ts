let diceInput=document.getElementById('diceImg')! as HTMLInputElement;
let score1=document.getElementById('score1')! as HTMLInputElement;
let score2=document.getElementById('score2')! as HTMLInputElement;
let turn:string="";
let totalScore1:number=0;
let totalScore2:number=0;



function btnRollDice():void
{
  console.log("======inside btn roll dice=== turn==="+turn);
  let diceNum:number=Math.ceil((Math.random()*6));
  console.log("==== dice num==="+diceNum);
  diceInput.innerHTML="<img src='Img/"+diceNum+".png' class='img-fluid imgDice' alt='dice'/>";
  if(diceNum==1)
  {
    turn=switchPlayer(turn);
    if(turn==='player2')
    {
   alert("Player 2's turn now");
    }
    else
    {
      alert("Player 1's turn now");
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

}

function switchPlayer(turn:string):string
{
    console.log("====turn in switch fucntion===="+turn);
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