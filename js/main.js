$('.box').on('click', function(){
  // $('body').toggleClass('O');
  var space = $(this).text().trim();
  var player = $('body').attr('class');
  var unused = "";

  if (player === 'X' && space === unused) {
    $(this).text('X');
    $('body').attr('class', 'O');
  } else if (player === 'O' && space === unused) {
    $(this).text('O');
    $('body').attr('class', 'X');
  };
  winCondition();
  // draw();

  function winCondition(){

    var topLeft = $('.box')[0].textContent;
    var topMiddle = $('.box')[1].textContent;
    var topRight = $('.box')[2].textContent;
    var middleLeft = $('.box')[3].textContent;
    var middleMiddle = $('.box')[4].textContent;
    var middleRight = $('.box')[5].textContent;
    var bottomLeft = $('.box')[6].textContent;
    var bottomMiddle = $('.box')[7].textContent;
    var bottomRight = $('.box')[8].textContent;

    if ((topLeft === "X" || topLeft === "O") &&
      ((topLeft === topMiddle && topLeft === topRight) ||
      (topLeft === middleLeft && topLeft === bottomLeft) ||
      (topLeft === middleMiddle && topLeft === bottomRight))){
      setTimeout(winReset, 300);
    }

    else if ((topRight === "X" || topRight === "O") &&
      ((topRight === middleRight && topRight === bottomRight) ||
      (topRight === middleMiddle && topRight === bottomLeft))){
      setTimeout(winReset, 300);
    }

    else if ((middleMiddle === "X" || middleMiddle === "O") &&
      ((middleMiddle === topMiddle && middleMiddle === bottomMiddle) ||
      (middleMiddle === middleRight && middleMiddle === middleLeft))){
      setTimeout(winReset, 300);
    }

    else if ((bottomMiddle === "X" || bottomMiddle === "O") &&
      (bottomMiddle === bottomRight && bottomMiddle === bottomLeft)){
      setTimeout(winReset, 300);
    }

    else if (
      (topLeft === "X"      || topLeft === "O")       &&
      (topMiddle === "X"    || topMiddle === "O")     &&
      (topRight === "X"     || topRight === "O")      &&
      (middleLeft === "X"   || middleLeft === "O")    &&
      (middleMiddle === "X" || middleMiddle === "O")  &&
      (middleRight === "X"  || middleRight === "O")   &&
      (bottomLeft === "X"   || bottomLeft === "O")    &&
      (bottomMiddle === "X" || bottomMiddle === "O")  &&
      (bottomRight === "X"  || bottomRight === "O ")
    ){
    setTimeout(drawReset, 300);
    };
  };

  function winReset(){
    if (player === 'X') {
      alert("X Wins! X gun give it to ya!");
    } else {
      alert("O Wins! OOOOOOOOO Ya!");
    };
    $('body').attr('class', 'X');
    $('.box').empty();
  };

  function drawReset(){
    alert("It's a Draw! You're both equally bad!");  
    $('body').attr('class', 'X');
    $('.box').empty();
  }

});
