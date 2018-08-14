$(function (event){
  //Put the code inside this
  // it gets the code ready

  // variables I am gonna need
  //score
  var clearScore = $(".clearScore"); //use this when time is finished
  var score = $(".score");
  //only true when game is playing
  var playGame = false;
  var playerScore = 0; //the score of the player at the beginning
  var turn = 0; //who is playing
  //i want to store the score of each player, compare them after
  // timer

  var timeLeft = 40; //Im giving the player 40s to play
  //time out during the play
  var timer = setInterval(function(){
    if (timeLeft != 0) {
      timeLeft--;
    }
    else if (timeLeft == 0){
      $(".img img:last-child").remove() //remove image of last enemy
      console.log("finish");
      //TO DO: close the game when finished
      playGame = false;
      clearInterval(timer);
      /////its doing again and again the count!!!
      }
    }, 1000);

    //I want to take the number of score and record it
    $("score").each(function(index){
      $(this).data("score", index);
    })


  //Clicking on the body
  document.body.addEventListener('click', function() {
    // I want the bat to rotate
    //I want the monster to disappear
    $("enemy").click(function() {
      playerScore++;
      score.html("<b  class='score'> Score: " + playerScore + " </b>");
      $("enemy").remove();
    //IF on monster : add +1 to the score, else: score stays the same
      playerScore++;
      score.html("<b  class='score'> Score: " + playerScore + " </b>");
      $(".img img:last-child").remove()
    })
  });

    //MONSTER PART
    var container = ["0"]; //i only have one picture now
    //generate random position values for top
    function generateRandomForArray() {
      var num = Math.floor(Math.random() * 23);
      return num;
    }
    function generateRandom() {
      var num = Math.floor(Math.random() * (($(window).height() - 250) - 150 + 1) + 150);
      return num;
    }
    //generate random positions value for left
    function generateRandomLeft() {
      var num = Math.floor(Math.random() * (($(window).width() - 250) - 100 + 1) + 100);
      return num;
    }
    //random number generator to set size of characters
    function generateSize() {
      var num = Math.floor(Math.random() * (500 - 100 + 1) + 100);
      return num;
    }

    function setValue() {
        if (playGame == true) { //if you're playing the game
          $(".img img:last-child").remove() //i want the last monster to disappear
          var num = container[generateRandomForArray()];
          var size = generateSize();
          img.append("<img class='size' style='width:" + size + "px' src ='img/" + num + ".png'>");
          var left = generateRandomLeft();
          var top = generateRandom();
          img.last().css({
            "position": "absolute",
            "top": top + "px",
            "left": left + "px",
            "width": size + "px",
            "height": size + "px"
          });
        } //end of if playGame
      } //end of function setValue

    // to restart the game
    $("#restart").on("click", function restart() {
      location.reload();
    })
  }); //  end of fonction event
