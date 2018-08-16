
$("form").on("submit",function(event){
  var firstName = $("input#firstName").val();
  // $(".playerNames").html(firstName);
  var secondName = $("input#secondName").val();
  localStorage.setItem(JSON.stringify(firstName));
  localStorage.setItem(JSON.stringify(secondName));
  //put the name of the player in the array
  // localStorage.setItem('turn1', secondName);
  var name1 = localStorage.getItem("firstName");
  return storedNames;
  })
// Use local storage and jason
