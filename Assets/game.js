$(document).ready(function(){

var targetScore=1;
var yourScore = 0;
var totalWins = 0;
var totalLosses = 0;
var crystal1=0;
var crystal2=0;
var crystal3=0;
var crystal4=0;



function startGame(){
    yourScore = 0
    //generate random target score
    targetScore = Math.floor((Math.random() * 120) + 19)

    // generate random numbers for crystals
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    //reset yourScore = 0
    console.log("crysta1: " + crystal1)
    console.log("crysta2: " + crystal2)
    console.log("crysta3: " + crystal3)
    console.log("crysta4: " + crystal4)
    console.log("targetScore: " + targetScore);
    $("#targetScore").text(targetScore);
    $("#yourscore").text(yourScore);

}

startGame()
console.log("before click: " + yourScore)

//on click for our crystals{
$("#crystal1").on("click", function(){
  //alert("we got clicked!")
   yourScore += crystal1;
  //yourScore = yourScore + crystal1
  console.log("After click: " + yourScore);
  
  if (yourScore === targetScore){
    alert("You win");
    totalWins++
    //display new win count document
    $("#totalWins").text(totalWins);
    startGame();
  } else if (yourScore > targetScore){
    console.log("you lose")
    totalLosses++
    $("#totalLosses").text(totalLosses);
    startGame();

  }

  });


$("#crystal2").on("click", function(){
 yourScore += crystal2
  console.log("After click: " + yourScore)

  if (yourScore === targetScore){
    alert("You win");
    totalWins++
    //display new win count document
    $("#totalWins").text(totalWins);
    // startGame();
}
 if( yourScore > targetScore){
    alert("You lose");
    totalLosses++
    $("#totalLosses").text(totalLosses);
     startGame();
  
  //alert("2")

   };
 $("#crystal3").on("click", function(){
     yourscore+= crystal3
     console.log("After click "+ yourScore)

     if (yourScore === targetScore){
      alert("You win");
      totalWins++
      //display new win count document
      $("#totalWins").text(totalWins);
      // startGame();
  }
   if( yourScore > targetScore){
      alert("You lose");
      totalLosses++
      $("#totalLosses").text(totalLosses);
       startGame();
   
    }); 
   
   

 $("#crystal4").on("click", function(){
     yourScore += crystal4
     console.log("After click" + yourScore)
   });
        //line of code that says add crystal value to yourScore
    //display yourScore

    if (yourScore === targetScore){
        alert("You win");
        totalWins++
        //display new win count document
        $("#totalWins").text(totalWins);
        // startGame();
    }
     if( yourScore > targetScore){
        alert("You lose");
        totalLosses++
        $("#totalLosses").text(totalLosses);
         startGame();
    }