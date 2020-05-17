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
];

// Select 3 questions random
function ques(sheet, neededElements) {
  var result = [];
  for (var i = 0; i < neededElements; i++) {
    result.push(sheet[Math.floor(Math.random() * sheet.length)]);
  }
  return result;
}
var questions = ques(sheet, 3);

//Select 1 question random which need to answer
function targetQue() {
  var random = Math.floor(Math.random() * questions.length);
  return questions[random];
}

//Fill in the squares with colors according to the question
var targetQue2 = targetQue();
elementsColor = document.querySelectorAll(".square1");
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
colors = addColor();
// Fill in the squares with  3 colors which have the right one and check the click
elements = document.querySelectorAll(".square");
for (var i = 0; i < colors.length; i++) {
  elements[i].style.background = colors[i];
  elements[i].addEventListener("click", function () {
    var clickedColor = this.style.background;
    if (clickedColor === rightColor) {
      alert("Right");
    } else {
      this.style.background = "#232323";
    }
  });
}

$("#check").css("color", rightColor);
