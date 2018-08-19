$(function (event){
  var container = ["4", "2", "3", "0", "2", "0", "4"]; //put the same image multiple times to make it more rando;
  var img = $(".img");
  var timer = $(".timer");
  var timerInterval = $("timerInterval");
  var restart = $(".restart");
  var highScore = 0;
  var turn = 0; //who is playing
  var player2score = 0;
  var score = $("score");
  // variables I am gonna need
  var clearScore = $(".clearScore"); //use this when time is finished
  var score = $(".score");
  var playGame = false; //only true when game is playing
  var playerScore = 0; // player's score at the beginning
  var test = $("#test");

//add a ticktack effect with timeleft

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
    var num = Math.floor(Math.random() * 6);
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

  //i want to store the score of each player, compare them after timer
  var timeLeft = 20; //Im giving the player 10s to play

  var monstInt = setInterval(function() {
    setValue();
  }, 800)

  $(".playerNames").html("player 1 turn");


  var timerInterval =  setInterval(function(){
    if (timeLeft != 0) {
      timeLeft--;
      $(".timer1").html("Timer : " + timeLeft);
      $(".player1score").html("Score : " + playerScore); //show the score of the first player
    } else if (timeLeft == 0){
      console.log("end of game flow");
      turn ++; //switch to next player
      $(".playerNames").html("player 2 turn"); //return whom turn it is
      clearInterval(timerInterval)
      clearInterval(monstInt)
      timeLeft = 10; //Im giving the player 10s to play
      }
    }, 1000); //end of set interval


  document.getElementById("button").addEventListener("click", function() {
    var playerScore = 0;
    $('.container-fluid').css("background-image", "url(../Pictures/street.jpg)");
    $(".img").click(function() {
      playerScore++; //IF you click on monster, the score rise up
      })
    var monstInt2 = setInterval(function() {
      setValue();
    }, 800);
    var timerInterval2 = setInterval(function(){
      if (timeLeft != 0) {
        timeLeft--;
        $(".timer2").html("Timer : " + timeLeft);
        $(".player2score").html("Score: " + playerScore);
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
