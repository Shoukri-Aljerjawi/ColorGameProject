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
    question: ["green", " red"],
    answer: "brown",
  },
  {
    question: ["white", " red"],
    answer: "pink",
  },
  {
    question: ["black", " white"],
    answer: "gray",
  },

  {
    question: ["green", "yellow"],
    answer: "greenyellow",
  },
  // {
  //   question: ["green", "blue"],
  //   answer: " darkgreen",
  // },
];

// Select 3 questions random
// var uniqueRandoms = [];
// var numRandoms = 5;
// function makeUniqueRandom() {
//   // refill the array if needed
//   if (!uniqueRandoms.length) {
//     for (var i = 0; i < numRandoms; i++) {
//       uniqueRandoms.push(i);
//     }
//   }
//   var index = Math.floor(Math.random() * uniqueRandoms.length);
//   var val = uniqueRandoms[index];

//   // now remove that value from the array
//   uniqueRandoms.splice(index, 1);

//   return val;
// }
function ques() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    var index = Math.floor(Math.random() * sheet.length);
    result.push(sheet[index]);
    sheet.splice(index, 1);
  }

  return result;
}
var questions = ques();

//Select 1 question random which need to answer
// function targetQue() {
//   var random = Math.floor(Math.random() * questions.length);
//   return questions[random];
// }

//Fill in the squares with colors according to the question
var targetQue2 = questions[0];
//console.log(targetQue2);
var elementsColor = document.querySelectorAll(".square1");
// for (var i = 0; i < targetQue2.question.length; i++) {
//   elementsColor[i].style.background = targetQue2.question[i];
// }
elementsColor[0].style.background = targetQue2.question[0];
elementsColor[1].style.background = targetQue2.question[1];
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
console.log(colors);
// Fill in the squares with  3 colors which have the right one and check the click
var elements = document.querySelectorAll(".square");
for (var i = 0; i < colors.length; i++) {
  elements[i].style.background = colors[i];
  // if (
  //   elements[0] == elements[1] ||
  //   elements[0] == elements[2] ||
  //   elements[2] == elements[3]
  // ) {
  //   location.reload();
  // }
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

$("#newgame").bind("click", function () {
  location.reload();
});
