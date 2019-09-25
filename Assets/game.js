$(document).ready(function () {

  var targetScore = 1;
  var yourScore = 0;
  var totalWins = 0;
  var totalLosses = 0;
  var crystal1 = 0;
  var crystal2 = 0;
  var crystal3 = 0;
  var crystal4 = 0;



  function startGame() {
    yourScore = 0
    //generate random target score
    targetScore = Math.floor((Math.random() * 120) + 19)

    // generate random numbers for crystals
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    //reset yourScore = 0
    console.log("crystal1: " + crystal1)
    console.log("crystal2: " + crystal2)
    console.log("crystal3: " + crystal3)
    console.log("crystal4: " + crystal4)
    console.log("targetScore: " + targetScore);
    $("#targetScore").text(targetScore);
    $("#yourScore").text(yourScore);

  }

  $("#totalLosses").text(totalLosses);
  startGame()

  console.log("before click: " + yourScore)

  //on click for our crystals{
  $("#crystal1").on("click", function () {
    // alert("we got clicked!")
    yourScore += crystal1;
    //yourScore = yourScore + crystal1
    console.log("After click: " + yourScore);
    $("#yourScore").text(yourScore);

    if (yourScore === targetScore) {
      alert("You win");
      totalWins++
      //display new win count document
      $("#totalWins").text(totalWins);
      startGame();
    } else if (yourScore > targetScore) {
      console.log("you lose")
      totalLosses++
      $("#totalLosses").text(totalLosses);
      startGame();
    }
  });
  
  $("#crystal2").on("click", function () {
    // alert("we got clicked!")
    yourScore += crystal2;
    //yourScore = yourScore + crystal1
    console.log("After click: " + yourScore);
    $("#yourScore").text(yourScore);

    if (yourScore === targetScore) {
      alert("You win");
      totalWins++
      //display new win count document
      $("#totalWins").text(totalWins);
      startGame();
    } else if (yourScore > targetScore) {
      console.log("you lose")
      totalLosses++
      $("#totalLosses").text(totalLosses);
      startGame();
    }
  });

  
$("#crystal3").on("click", function (){
      // alert("we got clicked!")
      yourScore += crystal3;
      //yourScore = yourScore + crystal1
      console.log("After click: " + yourScore);
      $("#yourScore").text(yourScore);
  
      if (yourScore === targetScore) {
        alert("You win");
        totalWins++
        //display new win count document
        $("#totalWins").text(totalWins);
        startGame();
      } else if (yourScore > targetScore) {
        console.log("you lose")
        totalLosses++
        $("#totalLosses").text(totalLosses);
        startGame();
      }
    });
    $("#crystal4").on("click", function (){
      // alert("we got clicked!")
      yourScore += crystal4;
      //yourScore = yourScore + crystal1
      console.log("After click: " + yourScore);
      $("#yourScore").text(yourScore);
  
      if (yourScore === targetScore) {
        alert("You win");
        totalWins++
        //display new win count document
        $("#totalWins").text(totalWins);
        startGame();
      } else if (yourScore > targetScore) {
        console.log("you lose")
        totalLosses++
        $("#totalLosses").text(totalLosses);
        startGame();
      }
    });
  
  





  //line of code that says add crystal value to yourScore
  //display yourScore

  if (yourScore === targetScore) {
    alert("You win");
    totalWins++
    //display new win count document
    $("#totalWins").text(totalWins);
    // startGame();
  }
  if (yourScore > targetScore) {
    alert("You lose");
    totalLosses++
    $("#totalLosses").text(totalLosses),
      startGame()
  }

});