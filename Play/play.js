$(function (event){
  //Put the code inside this
  // it gets the code ready
  var container = ["0"]; //i only have one picture now
  var img = $(".img");
  var restart = $(".restart");
  var highScore = 0; //highscore
  //random position values from top
  function generateRandomForArray() {
    var num = Math.floor(Math.random() * 4);
    //put all the images in img folder and name them 0 1 2 3
    return num;
  }
  function generateRandom() {
    var num = Math.floor(Math.random() * (($(window).height() - 250) - 150 + 1) + 150);
    return num;
  }
  //random positions value from left
  function generateRandomLeft() {
    var num = Math.floor(Math.random() * (($(window).width() - 250) - 100 + 1) + 100);
    return num;
  }
  //random size of monsters
  function generateSize() {
    var num = Math.floor(Math.random() * (500 - 100 + 1) + 100);
    return num;
  }
  // variables I am gonna need
  var clearScore = $(".clearScore"); //use this when time is finished
  var score = $(".score");
  var playGame = false; //only true when game is playing
  var playerScore = 0; // player's score at the beginning
  var turn = 0; //who is playing
  //i want to store the score of each player, compare them after timer
  var timeLeft = 20; //Im giving the player 20s to play
  var timer = setInterval(function(){
    if (timeLeft != 0) {
      timeLeft--;
      $(".playerScore").html(playerScore); //show the score
      $("score").each(function(index){
        $(this).data("score", index); //record the score
      })

        $(".img").click(function() {
          console.log("yes!")
          playerScore++; //raise score
          playerScore++; //IF you click on monster, the score rise up
          score.html("<b  class='score'> Score: " + playerScore + " </b>");
        })//end enemy click function
    }
    else if (timeLeft == 0){
      $(".img img:last-child").remove() //remove image of last enemy
      console.log("finish");
      playGame = false;
      restart.click(function() {
        location.reload(); //reload page
      })
      clearInterval(timer);
    }//end of else if
  }, 1000); //end of set interval


    function setValue() { //we're calling all the var we defined for the monsters
      console.log(playerScore); //return the score of the player on the console
      console.log(generateRandomForArray());
          $(".img img:last-child").remove() //i want the last monster to disappear
          var num = container[generateRandomForArray()];
          var size = generateSize();
          img.append("<img class='size' style='width:" + size + "px' src ='../img/" + 0 + ".png'>");
          var left = generateRandomLeft();
          var top = generateRandom();
          img.last().css({
            "position": "absolute",
            "top": top + "px",
            "left": left + "px",
            "width": size + "px",
            "height": size + "px"
          });
      } //end of function setValue
      setInterval(function(){ setValue(); }, 1000); //the monsters disappear after 1s


    // to restart the game
    $("#restart").on("click", function restart() {
      location.reload();
    })
  }); //  end of fonction event
