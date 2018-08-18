$(function (event){
  //Put the code inside this
  // it gets the code ready
  var container = ["0", "2", "0", "2"];
  var img = $(".img");
  var timer = $(".timer");
  var timerInterval = $("timerInterval");
  var restart = $(".restart");
  var highScore = 0;
  var turn = 0; //who is playing
  var playerscore = playerScore;
  // var player1score = player1score;
  var player2score = 0;
  var score = $("score");
  var score = JSON.parse(localStorage.getItem('playerscore'));
  var highScore = 0; //highscore

  function setValue() { //we're calling all the var we defined for the monsters
    console.log(playerScore); //return the score of the player on the console
    generateRandomForArray();
        $(".img img:last-child").remove() //i want the last monster to disappear
        var num = container[generateRandomForArray()];
        var size = generateSize();
        img.append("<img class='size' style='width:" + size + "px' src ='../img/" + num + ".png'>");
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

  $(".img").click(function() {
    playerScore++; //IF you click on monster, the score rise up
    })

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
  var test = $("#test");


  //i want to store the score of each player, compare them after timer
  var timeLeft = 10; //Im giving the player 10s to play

  var monstInt = setInterval(function() {
    setValue();
  }, 800)

  $(".playerNames").html("player 1 turn");


  var timerInterval =  setInterval(function(){
    if (timeLeft != 0) {
      timeLeft--;
      $(".player1score").html(playerScore); //show the score of the first player
    } else if (timeLeft == 0){
      console.log("end of game flow");
      turn ++; //switch to next player
      $(".playerNames").html("player 2 turn"); //return whom turn it is
      clearInterval(timerInterval)
      clearInterval(monstInt)
      timeLeft = 10; //Im giving the player 10s to play
      }
    }, 1000); //end of set interval

    //
  // var player1score = playerScore;
  localStorage.setItem("player1score", playerScore);
  var need = localStorage.getItem("player1score");


  document.getElementById("button").addEventListener("click", function() {
    var monstInt2 = setInterval(function() {
      setValue();
    }, 800);
    var timerInterval2 = setInterval(function(){
      if (timeLeft != 0) {
        timeLeft--;
        $(".player2score").html("Score: " + (playerScore-need));
      } else if (timeLeft == 0){
        console.log("game finished");
        clearInterval(timerInterval2);
        clearInterval(monstInt2);
      } //end of else if
    }, 1000); //end if set interval
  });


    function stop() {
      console.log("finish");
      }
  }); //  end of fonction event
