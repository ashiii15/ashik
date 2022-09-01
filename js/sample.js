

 




let firstcard = 10;
let secondcard = 11;
let sum = firstcard + secondcard + 5;
let hasblackjack = false;
let isAlive = true
let message = ""

function startgame() {
   
   if (sum <= 20) {
      message = "do you want to draw a new card ?"
    }
    else if(sum === 21){
       message = "wohoo! you got blackjack"
       hasblackjack =true
       
    }
    else{
       message = "you are out of the game"
       isAlive = false
    }
    console.log("hasblackjack")
    console.log("isAlive")
    
    console.log(message)
   }



startgame()