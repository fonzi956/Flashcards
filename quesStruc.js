var pos = 0, test, test_status, question, choice, mus, choices, chA, chB, chC, chD, correct = 0;
//

var shq = [];
var hq = [];
var sq = [];
function _(x) {
    return document.getElementById(x);
}
//pos = 0;
function renderQuestion() {
    test = _("test");

    if (sq.length == questions.length) {
        test.innerHTML = "<p>" + sq + "</p>";
        test.innerHTML += "<br><p>" + hq + "</p>";
        test.innerHTML += "<br><button onclick='nextQuestion()'>Next Question</button>";
        pos = 0;
        correct = 0;
        return false;
    }

    // if(pos >= questions.length){
    // 	test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" </h2> ";
    // 	_("test_status").innerHTML = "Test Completed";
    // 	pos = 0;
    // 	correct = 0;
    // 	return false;
    // }
    var tot = questions.length - sq.length;
    var rq = [];
    var rpn = Math.floor(Math.random() * 3) + 1;
    var rn = [1, 3, 4, 2];
    rn = shuffle(rn);
    pos = Math.floor(Math.random() * questions.length);
    //pos = 0;
    while (sq.includes(pos)) {
        pos = Math.floor(Math.random() * questions.length);
        if (!sq.includes(pos)) break;
    }
    //pos = questions.length - 5;
    //pos = 41;
    if (pos == questions.length)--pos;

    _("test_status").innerHTML = "Question " + (pos + 1) + " of " + tot;
    question = questions[pos][0];
    Ans = questions[pos][1];
    mus = questions[pos][2];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<button onclick='checkAnswer()'>Flip</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ";
    test.innerHTML += "<button onclick='nextQuestion()'>Next</button>";
    if (typeof (mus) != "undefined") {
        test.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button onclick='play(mus)'>Audio</button>";
    }

    test.innerHTML += "<p id=\"myDIV\" hidden>" + Ans + "</p>";

}
function checkAnswer() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function nextQuestion() {
    sq.push(pos);
    //pos++;
    renderQuestion();
    window.scrollTo(0, 0);
}
function play(mus) {
    song = "Record/Ja/" + mus + ".ogg";
    var audio = new Audio(song);
    audio.play();
}

function HQuestion() {
    hq.push(pos);
    sq.push(pos);
    renderQuestion();
}

function done() {
    test.innerHTML = "<p>" + sq + "</p>";
    test.innerHTML += "<br><p>" + hq + "</p>";
    test.innerHTML += "<br><button onclick='nextQuestion()'>Next Question</button>";
}
window.addEventListener("load", renderQuestion, false);