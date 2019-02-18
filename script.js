var questionNumber = 0;
var total = 0;
var corrrect = 0;
var checked = false;

function renderQuestion() {
	var questionDOM = document.getElementById("question");
	var variantsDOM = document.getElementById("variants");

	questionDOM.innerHTML = "Вопрос " + (questionNumber + 1) + ". "
	if (total > 0) {
		questionDOM.innerHTML += "<span id=\"score\">(" + (corrrect / total * 100).toFixed(1) + "% верно из " + total + ")</span>"
	}
	questionDOM.innerHTML += "<br>" + quizData[questionNumber][0] + "?";

	variants = []
	for (var i = 0; i < quizData[questionNumber][1].length; i++) {
		variants.push("<li id=\"variant-" + i + "\" onclick=\"check(" + i + ")\">" + quizData[questionNumber][1][i] + "</li>");
	}
	variantsDOM.innerHTML = variants.join("");
	checked = false;
}

function check(variant) {
	var choosedVariant = document.getElementById("variant-" + variant);
	var correctVariant = document.getElementById("variant-" + quizData[questionNumber][2]);

	choosedVariant.className = "wrong";
	correctVariant.className = "right";

	if (!checked) {
		total += 1;
		if (variant == quizData[questionNumber][2]) {
			corrrect += 1;
		}

		checked = true;
	}

	var questionDOM = document.getElementById("question");
	questionDOM.innerHTML = "Вопрос " + (questionNumber + 1) + ". "
	questionDOM.innerHTML += "<span id=\"score\">(" + (corrrect / total * 100).toFixed(1) + "% верно из " + total + ")</span>"
	questionDOM.innerHTML += "<br>" + quizData[questionNumber][0] + "?";
}

function next() {
	questionNumber += 1;
	renderQuestion();
}

function random() {
	questionNumber = Math.floor(1000 * Math.random());
	renderQuestion();
}

function specificQ() {
	questionNumber = document.getElementById("specific").value - 1;
	if (questionNumber < 0) questionNumber = 0;
	if (questionNumber > 999) questionNumber = 999;

	renderQuestion();
}

window.addEventListener("load", renderQuestion, false);
