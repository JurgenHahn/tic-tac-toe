$('.box').on('click', function(){

  var player = $('body').attr('class');
  var space = $(this).text().trim();
  var unused = "";

  if (player === 'X' && space === unused) {
    $(this).text('X');
    $('body').attr('class', 'O');
  } else if (player === 'O' && space === unused) {
    $(this).text('O');
    $('body').attr('class', 'X');
  };
  winCondition();

  function winCondition(){

    var box = $('.box')
    var topLeft = $('.box')[0].textContent;
    var topMiddle = $('.box')[1].textContent;
    var topRight = $('.box')[2].textContent;
    var middleLeft = $('.box')[3].textContent;
    var middleMiddle = $('.box')[4].textContent;
    var middleRight = $('.box')[5].textContent;
    var bottomLeft = $('.box')[6].textContent;
    var bottomMiddle = $('.box')[7].textContent;
    var bottomRight = $('.box')[8].textContent;


    if ((topLeft === "X" || topLeft === "O") && (topLeft === topMiddle && topLeft === topRight)){
      box[0].style.color = "red", box[1].style.color = "red", box[2].style.color = "red"
      setTimeout(winReset, 300);
    }

    else if ((topLeft === "X" || topLeft === "O") && (topLeft === middleMiddle && topLeft === bottomRight)){
      box[0].style.color = "red", box[4].style.color = "red", box[8].style.color = "red"
      setTimeout(winReset, 300);
    }

    else if ((topLeft === "X" || topLeft === "O") && (topLeft === middleLeft && topLeft === bottomLeft)){
      box[0].style.color = "red", box[3].style.color = "red", box[6].style.color = "red"
      setTimeout(winReset, 300);
    }

    else if ((topMiddle === "X" || topMiddle === "O") && (topMiddle === middleMiddle && topMiddle === bottomMiddle)){
      box[1].style.color = "red", box[4].style.color = "red", box[7].style.color = "red"
      setTimeout(winReset, 300);
    }

    else if ((topRight === "X" || topRight === "O") && (topRight === middleRight && topRight === bottomRight)){
      box[2].style.color = "red", box[5].style.color = "red", box[8].style.color = "red"
      setTimeout(winReset, 300);
    }

    else if ((topRight === "X" || topRight === "O") && (topRight === middleMiddle && topRight === bottomLeft)){
      box[2].style.color = "red", box[4].style.color = "red", box[6].style.color = "red"
      setTimeout(winReset, 300);
    }

    else if ((middleLeft === "X" || middleLeft === "O") && (middleLeft === middleMiddle && middleLeft === middleRight)){
      box[3].style.color = "red", box[4].style.color = "red", box[5].style.color = "red"
      setTimeout(winReset, 300);
    }

    else if ((bottomLeft === "X" || bottomLeft === "O") && (bottomLeft === bottomMiddle && bottomLeft === bottomRight)){
      box[6].style.color = "red", box[7].style.color = "red", box[8].style.color = "red"
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
      (bottomRight === "X"  || bottomRight === "O")
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
    $('.box').css('color', 'black');
  };

  function drawReset(){
    alert("It's a Draw! You're both equally bad!");
    $('body').attr('class', 'X');
    $('.box').empty();
  }

});
