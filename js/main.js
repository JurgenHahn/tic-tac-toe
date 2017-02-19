$('.box').on('click', function(){

  // $('body').toggleClass('O');
    var space = $(this).text().trim();
    var player = $('body').attr('class');
    var unused = "";
    var notOver = $(this).attr('class') === 'box';


    if (player === 'X' && space === unused && notOver) {
      $(this).text('X');
      $('body').attr('class', 'O');
      winCondition();

    }
    else if (player === 'O' && space === unused && notOver) {
      $(this).text('O');
      $('body').attr('class', 'X');
      winCondition();

    }
});


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
    // console.log("Winner!");
    $('.box').attr("class", "filled");
  }

  else if ((topRight === "X" || topRight === "O") &&
    ((topRight === middleRight && topLeft === bottomRight) ||
    (topRight === middleMiddle && topRight === bottomLeft))){
    // console.log("Winner!");
    $('.box').attr("class", "filled");
  }

  else if ((middleMiddle === "X" || middleMiddle === "O") &&
    ((middleMiddle === topMiddle && middleMiddle === bottomMiddle) ||
    (middleMiddle === middleRight && middleMiddle === middleLeft))){
    // console.log("Winner!");
    $('.box').attr("class", "filled");
  }

  else if ((bottomMiddle === "X" || bottomMiddle === "O") &&
  (bottomMiddle === bottomRight && bottomMiddle === bottomLeft)){
    // console.log("Winner!");
    $('.box').attr("class", "filled");
  }

  // else if (
  //   (topLeft === "X" || topLeft === "0") &&
  //   (topMiddle === "X" || topMiddle === "0") &&
  //   (topRight === "X" || topRight === "0") &&
  //   (middleLeft === "X" || middleLeft === "0") &&
  //   (middleMiddle === "X" || middleMiddle === "0") &&
  //   (middleRight === "X" || middleRight === "0") &&
  //   (bottomLeft === "X" || bottomLeft === "0") &&
  //   (bottomMiddle === "X" || bottomMiddle === "0") &&
  //   (bottomRight === "X" || bottomRight === "0")
  //   ){
  //   console.log("Draw!");
  // };
};
