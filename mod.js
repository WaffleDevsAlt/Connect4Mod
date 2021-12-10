var dotcolor1 = "red",
  dotcolor2 = "yellow",
  dotcolormain = "black",
  dotcolorwin1 = "#400",
  dotcolorwin2 = "#770",
  backgroundcolor = "black",
  boardcolor = "black",
  colorname1 = "Red",
  colorname2 = "Yellow";
document.getElementById('result').id = "resultMOD";
document.getElementById('reset').id = "resetMOD";
for (var i = 1; i <= 42; i++) {
  document.getElementById(i).id = i + 'MOD';
  $('#' + i + 'MOD').addClass('dotMOD');
  $('#' + i + 'MOD').removeClass('dot');
}
$("#resetMOD").css({
  'position': 'absolute',
  'left': 'calc(100vw/2 - 42px)',
  'top': 'min(calc(60vw + 155px), 755px)',
  'background-color': '#000',
  'border': '2px solid #fff',
  'color': 'white',
  'padding': '10px 20px',
  'text-align': 'center',
  'text-decoration': 'none',
  'display': 'inline-block',
  'font-size': '15px',
  'cursor': 'pointer'
});
$("#resultMOD").css({
  'color': 'white',
  'font-family': 'Times, serif',
  'padding': '0',
  'position': 'absolute',
  'left': 'calc(50vw - 40px)',
  'top': '20px',
  'width': '120p',
  '-webkit-user-select': 'none',
  '-khtml-user-select': 'none',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  'user-select': 'none'
});
$('body').on('click', '.dotMOD', function() {
  if (!this.id.includes("MOD")) return;
  var ID = this.id.replace("MOD", "");
  if (!playing) return;
  if (board[ID - 1] != "0") return;
  if (board[Number(ID) + 34] == "0") {
    ID = Number(ID) + 35;
  } else if (board[Number(ID) + 27] == "0") {
    ID = Number(ID) + 28;
  } else if (board[Number(ID) + 20] == "0") {
    ID = Number(ID) + 21;
  } else if (board[Number(ID) + 13] == "0") {
    ID = Number(ID) + 14;
  } else if (board[Number(ID) + 6] == "0") {
    ID = Number(ID) + 7;
  }
  board[ID - 1] = turn;
  if (turn == 1) {
    $('#' + ID + 'MOD').css("background-color", dotcolor1);
    turn = 2
    $("#resultMOD").html(colorname2 + "'s Turn");
  } else {
    turn = 1;
    $("#resultMOD").html(colorname1 + "'s Turn");
    $('#' + ID + 'MOD').css("background-color", dotcolor2);
  }
  winLogic();
});
$('body').on('click', '#resetMOD', function() {
  $("html").removeClass('redwon');
  $("html").removeClass('bluewon');
  $("html").css("background-color", backgroundcolor);
  $(".dotMOD").css("background-color", dotcolormain);
  turn = 1;
  playing = true;
  $("#resultMOD").html(colorname1 + "'s Turn");
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
});

function winLogic() {
  for (var i = 0; i < winsets.length; i++) {
    var a = board[winsets[i][0] - 1];
    var b = board[winsets[i][1] - 1];
    var c = board[winsets[i][2] - 1];
    var d = board[winsets[i][3] - 1];
    if (a == "1" && b == "1" && c == "1" && d == "1") {
      playing = false;
      $("#resultMOD").html(colorname1 + " Won!");
      $('#' + winsets[i][0] + 'MOD').css("background-color", dotcolorwin1);
      $('#' + winsets[i][1] + 'MOD').css("background-color", dotcolorwin1);
      $('#' + winsets[i][2] + 'MOD').css("background-color", dotcolorwin1);
      $('#' + winsets[i][3] + 'MOD').css("background-color", dotcolorwin1);
      $("html").addClass('redwon');
    } else if (a == "2" && b == "2" && c == "2" && d == "2") {
      playing = false;
      $("#resultMOD").html(colorname2 + " Won!");
      $('#' + winsets[i][0] + 'MOD').css("background-color", dotcolorwin2);
      $('#' + winsets[i][1] + 'MOD').css("background-color", dotcolorwin2);
      $('#' + winsets[i][2] + 'MOD').css("background-color", dotcolorwin2);
      $('#' + winsets[i][3] + 'MOD').css("background-color", dotcolorwin2);
      $("html").addClass('bluewon');
    }
  }
}
