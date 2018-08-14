$(function (event){
  //Put the code inside this
  // it gets the code ready
      //MONSTER PART
  var container = ["0"]; //i only have one picture now
  var img = $(".img");
  var restart = $(".restart");
  var highScore = 0; //highscore
  //generate random position values for top
  function generateRandomForArray() {
    var num = Math.floor(Math.random() * 4);
    //put all the images in img folder and name them 0 1 2 3
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
  // variables I am gonna need
  //score
  var clearScore = $(".clearScore"); //use this when time is finished
  var score = $(".score");
  //only true when game is playing
  var playGame = false;
  var playerScore = 0; //the score of the player at the beginning
  var turn = 0; //who is playing
  //i want to store the score of each player, compare them after timer
  var timeLeft = 20; //Im giving the player 40s to play
  //time out during the play
  var timer = setInterval(function(){
    if (timeLeft != 0) {
      timeLeft--;
      $(".playerScore").html(playerScore);
      //I want to take the number of score and record it
      $("score").each(function(index){
        $(this).data("score", index);
      })


      //Clicking on the body
        // I want the bat to rotate
        //I want the monster to disappear
        //ONLY ONE CLICK FUNCTION
        $(".img").click(function() {
          console.log("hello")
          playerScore++; //raise score
          score.html("<b  class='score'> Score: " + playerScore + " </b>");
          // setTimeout(myFunction, 300);
        //IF on monster : add +1 to the score, else: score stays the same
          playerScore++;
          score.html("<b  class='score'> Score: " + playerScore + " </b>");
        })//end enemy click function
    }
    else if (timeLeft == 0){
      $(".img img:last-child").remove() //remove image of last enemy
      // STORE THE SCORES//
      console.log("finish");
      //TO DO: close the game when finished
      playGame = false;
      restart.click(function() {
        location.reload(); //reload page
      })
      var timerId = 0;
      function setResetInterval(bool) {
        if (bool) {
          timerId = setInterval(function() {
            setValue();
          }, 1000)
        }
      }
      clearInterval(timerId);
    }//end of else if
  }, 1000); //end of set interval



// make an array of [0 1 2]
// randomArray to pick from the array inside the setinterval function so it calls a random
//set interval
// set to a variable
//rename the Pictures to 0 1 2

    function setValue() {
      console.log(playerScore);
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
      setInterval(function(){ setValue(); }, 1000);


    // to restart the game
    $("#restart").on("click", function restart() {
      location.reload();
    })
  }); //  end of fonction event
