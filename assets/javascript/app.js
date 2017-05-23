$(document).ready(function () {
    var questionCount = 0;
    var questions = [
        {
            question: "South Africa completely surrounds which other African nation?",
            answerOptions: ["Mozambique", "Madagascar", "Swaziland", "Lesotho"],
            correctAnswer: "Lesotho",
            answerDescription: "South Africa completely surrounds Lesotho"
        },
        {
            question: "Which of the great lakes does not share a border with Canada?",
            answerOptions: ["Lake Superior", "Lake Michigan", "Lake Ontario", "Lake Erie"],
            correctAnswer: "Lake Michigan",
            answerDescription: "Lake Michigan does not share a border with Canada"
        },
        {
            question: "What is the largest island in the Caribbean Sea?",
            answerOptions: ["Cuba", "Haiti", "Jamaica", "Papau New Guinea"],
            correctAnswer: "Cuba",
            answerDescription: "Cuba is the largest island in the Caribeena Sea"
        },
        {
            question: "What is NOT one of the five boroughs of New York City?",
            answerOptions: ["Manhattan", "Bronx", "Long Island", "Queens"],
            correctAnswer: "Long Island",
            answerDescription: "Long Island is NOT one of the five boroughs of New York City"
        },
        {
            question: "What city is the capital of Canada?",
            answerOptions: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
            correctAnswer: "Ottawa",
            answerDescription: "Ottawa is the capital of Canada"
        },
        {
            question: "How many US states border the Pacific Ocean?",
            answerOptions: ["3", "4", "5", "6"],
            correctAnswer: "5",
            answerDescription: "There are 5 US states which border the Pacific Ocean: California, Washington, Oregon, Hawaii, and Alaska"
        },
        {
            question: "What is the capital city of Australia?",
            answerOptions: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
            correctAnswer: "Canberra",
            answerDescription: "Canberra is the capital city of Australia"
        },
        {
            question: "In what country would you find Mount Kilimanjaro?",
            answerOptions: ["Egypt", "Kenya", "Tanzania", "Ethiopia"],
            correctAnswer: "Tanzania",
            answerDescription: "Mount Kilimanjaro is in Tanzania"
        },
        {
            question: "The Black Forest is located in what European country?",
            answerOptions: ["Netherlands", "France", "Germany", "Switzerland"],
            correctAnswer: "Germany",
            answerDescription: "The Black Forest is located in Germany"
        },
        {
            question: "What country is bordered by both France and Spain?",
            answerOptions: ["Luxembourg", "Liechtenstein", "Vatican City", "Andorra"],
            correctAnswer: "Andorra",
            answerDescription: "Adorra is bordered by both France and Spain"
        },
        {
            question: "Santiago is the capital of which country?",
            answerOptions: ["Chile", "Argentina", "Venezuela", "Bolivia"],
            correctAnswer: "Chile",
            answerDescription: "Santiago is capital of Chile"
        },
        {
            question: "In which U.S. state would you find Mount Rushmore?",
            answerOptions: ["Nebraska", "South Dakota", "West Virginia", "North Carolina"],
            correctAnswer: "South Dakota",
            answerDescription: "Mount Rushmore is in South Dakota"
        }
    ]
    var timer = {
        time: 8,
        clockRunning: false,
        intervalId: "",
        start: function () {
            if (!timer.clockRunning) {
                intervalId = setInterval(timer.count, 1000);
                timer.clockRunning = true;
                $("#time").text(timer.time);
            }
        },
        count: function () {
            if (timer.time > 0) {
                timer.time--
                $("#time").text(timer.time);
            } else {
                timer.stop();
                // showAnswer();
            }
        },
        stop: function () {
            clearInterval(intervalId);
            timer.clockRunning = false;
        },
    }

    function setupGame() {
        $(this).css("display", "none");
        displayQuestion();
        timer.start();
        $("#time-container").css("display", "block");
        $("#question-container").css("display", "block");
        $("#answers-container").css("display", "block");
    }

    function displayQuestion() {
        $("#question-container").empty();
        $("#answers").empty();
        var questionObj = questions[questionCount];
        var newQuestionElem = $("<p></p>");
        newQuestionElem.text(questionObj.question);
        $("#question-container").append(newQuestionElem);
        for (var i = 0; i < questionObj.answerOptions.length; i++) {
            var newAnswerItem = $("<li></li>");
            newAnswerItem.text(questionObj.answerOptions[i]);
            newAnswerItem.addClass("answer-option");
            newAnswerItem.attr("value", questionObj.answerOptions[i]);
            $("#answers").append(newAnswerItem);
        }
    }

    function answerSelectionHandler(e) {
        var answerSelected = $(this).attr("value");
        console.log(answerSelected);
        $("#answers").empty();
        if (answerSelected === questions[questionCount].correctAnswer) {
            $("#answers").text("Correct! " + questions[questionCount].answerDescription)
        } else {
            $("#answers").text("Wrong. " + questions[questionCount].answerDescription)
        }
        questionCount++;

        timer.stop();
    }

    $("#start").click(setupGame);
    $("#answers").on("click", ".answer-option", answerSelectionHandler);
});