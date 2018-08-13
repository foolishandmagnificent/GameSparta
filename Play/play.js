$(document).ready(function() {
  //Put the code inside this
  // it gets the code ready

// variables I am gonna need
//score
  var clearScore = $(".clearScore");
  var score = $(".score");
  var playerScore = 0;
  //turn player
  var turn = 0; //who is playing

//i want to store the score of each player, compare them after
// timer
  var time = 40; //Im giving the player 40s to play
  var timer = setInterval(function countDown(){
    if (timeLeft != 0) {
      timeLeft--;
    } else if (timeLeft === 0){
      $(".img img:last-child").remove() //remove image of last enemy
      console.log("finish");
      clear.setInterval(timer)
  }, 1000);


  $(function (event){
    $("score").each(function(index){
      $(this).data("score", index);
      //I want to take the number of score and record it
    })
  }

//I was clicking on td, have to change to just click on the document
    $("[data-num]").one("click", function(event){


    })


// to restart the game
    $("#restart").on("click", function restart() {
      location.reload();
    })

});
