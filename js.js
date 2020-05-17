var result = 0;

function makeInput(id) {
	var btn = $("<button>xxxxxxxxxxx</button>");
	$(id).append(btn);
}

var sheet = [{
	question: "red and yellow" ,
	answer: "orange",

},
{
	question: "red and blue",
	answer: "purple"
},
{
	question: "yellow and blue",
	answer: "green"
},
{
	question: "gree and red",
	answer: "brown"
}];

function q1() {
	var num = Math.floor(Math.random() * 3)
	var q = (sheet[num].question);
	$("#question1").append(q);

	var btn = $("<br/><input type='radio' name='color1'>" + "<label>green</label>");
	$("#question1").append(btn);

	var btn2 = $("<input type='radio' name='color1'>" + "<label>red</label>");
	$("#question1").append(btn2);

	var btn3 = $("<input type='radio' name='color1'>" + "<label>blue</label>");
	$("#question1").append(btn3);

	console.log(label.val());
}

function q2() {
	var q = (sheet[Math.floor(Math.random() * 3)].question);
	$("#question2").append(q);

}

function q3() {
	var q = (sheet[Math.floor(Math.random() * 3)].question);
	$("#question3").append(q);

}

function q4() {
	var q = (sheet[Math.floor(Math.random() * 3)].question);
	$("#question4").append(q);

}

function q5() {
	var q = (sheet[Math.floor(Math.random() * 3)].question);
	$("#question5").append(q);

}
q1();
q2();
q3();
q4();
q5();
