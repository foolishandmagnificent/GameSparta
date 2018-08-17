$(function (event){
  //Put the code inside this
  // it gets the code ready
  var container = ["0", "2", "0", "2"]; //i only have one picture now
  var img = $(".img");
  var timer = $(".timer");
  var timerInterval = $("timerInterval");
  var restart = $(".restart");
  var highScore = 0;
  var turn = 0; //who is playing
  var playerscore = playerScore;
  var player1score = player1score;
  var player2score = player2score;
  var score = $("score");
  var firstScore = $("firstScore")
  var secondScore = $("secondScore")
  var firstName = $("firstName");
  var secondName = $("secondName");
  var score = JSON.parse(localStorage.getItem('playerscore'));
  var highScore = 0; //highscore

  //localStorage.setItem("player1score", "player2score");
   function displayScore() {
     for (var i = 1; i < 2; i++) {
     $("#test").append("<li>"+localStorage.getItem(i)+"</li>");
     }
   }
     if (localStorage.getItem(1)>localStorage.getItem(2)) {
       $("#leaderboard").empty().text("Player 1 wins");
       $("#leaderboard").show();
     }else if (localStorage.getItem(1)<localStorage.getItem(2)) {
       $("#leaderboard").empty().text("Player 2 wins");
       $("#leaderboard").show();
       }
     displayScore();

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
    })//end enemy click function

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
      var player1score = $(".player1score").html(playerScore); //show the score
      localStorage.setItem("player1score", player1score);
      $("score").each(function(index){
        $(this).data("score", index)
      score.html("<b  class='playerscore1'> Score: " + playerScore1 + " </b>");
      })
      // $(".highScore").html(highScore); //show the score
    } else if (timeLeft == 0){
      console.log("end of game flow");
      turn ++;
      var player2score = $(".playerNames").html("player 2 turn");
      clearInterval(timerInterval)
      clearInterval(monstInt)
      timeLeft = 10; //Im giving the player 10s to play
      }
    }, 1000); //end of set interval

    //
    // if (timeLeft == 0){

    // var timeLeft = 10; //Im giving the player 10s to play

  document.getElementById("button").addEventListener("click", function() {
    var monstInt2 = setInterval(function() {
      setValue();
    }, 800);
    var timerInterval2 = setInterval(function(){
      if (timeLeft != 0) {
        timeLeft--;
        localStorage.setItem("player2score", playerscore);
        var player2score = $(".player2score").html(player2score); //show the score
        $("score").each(function(index){
          $(this).data("score", index)
        score.html("<b  class='player2score'> Score: " + player2score + " </b>");
      })
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
    //
    // if (score === null) {
    //   $('#test').html("").empty();
    // }

    // to restart the game
    // $("restart").on("click", function restart() {
    //   location.reload();
    // })
  }); //  end of fonction event
