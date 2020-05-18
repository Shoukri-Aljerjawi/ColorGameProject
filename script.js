//var square = document.querySelectorAll(".square");
var sheet = [
  {
    question: ["red", "yellow"],
    answer: "orange",
  },
  {
    question: ["red", "blue"],
    answer: "purple",
  },
  {
    question: ["yellow", " blue"],
    answer: "green",
  },
  {
    question: ["gree", " red"],
    answer: "brown",
  },
  {
    question: ["white", " red"],
    answer: "pink",
  },
  {
    question: ["Black", " White"],
    answer: "Gray",
  },

  {
    question: ["Yellow", "purple"],
    answer: "orange",
  },
  {
    question: ["Green", "Yellow"],
    answer: "greenyellow",
  },
  {
    question: ["Green", "Blue"],
    answer: " DarkGreen",
  },
];

// Select 3 questions random
function ques() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    result.push(sheet[Math.floor(Math.random() * sheet.length)]);
  }
  return result;
}
var questions = ques();

//Select 1 question random which need to answer
function targetQue() {
  var random = Math.floor(Math.random() * questions.length);
  return questions[random];
}

//Fill in the squares with colors according to the question
var targetQue2 = targetQue();
//console.log(targetQue2);
var elementsColor = document.querySelectorAll(".square1");
for (var i = 0; i < targetQue2.question.length; i++) {
  elementsColor[i].style.background = targetQue2.question[i];
}
rightColor = targetQue2.answer;

console.log(rightColor);

// Fill in the squares with  3 colors which have the right one (On purpose)
function addColor() {
  var colorArr = [];
  for (var i = 0; i < questions.length; i++) {
    colorArr.push(questions[i].answer);
  }
  return colorArr;
}
var colors = addColor();
//change colors after select
function changeColors(color) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = color;
  }
}

// Fill in the squares with  3 colors which have the right one and check the click
var elements = document.querySelectorAll(".square");
for (var i = 0; i < colors.length; i++) {
  elements[i].style.background = colors[i];
  elements[i].addEventListener("click", function () {
    var clickedColor = this.style.background;
    if (clickedColor === rightColor) {
      //alert("Right");
      $("#message").text("Right Good job!!");
      changeColors(clickedColor);
    } else {
      this.style.background = "#232323";
      $("#message").text("Try Again !!");
    }
  });
}

$("#check").css("color", rightColor);

$("#newgame").bind("click", function () {
  location.reload();
});
