
//document.ready(function() {
    // at the start of the game the questions will apear and the timer will start when the user clicks on the page
    // game set up- right answer count, wrong answer count, an object with array for each question for 1 right and 3 wrong answers, 
    var rightAnswer = [];
    var wrongAnswer = [];
    var countdown = [];

    var theQuiz = [{
                answer1: ["Februaary 14th, 1912", "January 1th, 1862", "February 24th 1863", "July 4th 1776"],
                rightAns: 0,
            },
             {
                answer2: ["Phoenix", "Flagstaff", "Tucson", "Mesa"],
                rightAns: 2,
            },
            {
                answer3: ["362", "277", "159", "223"],
                rightAns: 1,
            },
            {
                answer4: ["3", "4", "5", "6"],
                rightAns: 2,
            },
            {
                answer5: ["Cottonwood", "Wilcox", "Sierra Vista", "Winslow"],
                rightAns: 3,
            },
            {
                answer6: ["5", "11", "16", "1 too many!!!"],
                rightAns: 2,
            }
        ]

    
    // Timer total time alloted: 60 seconds. 10 seconds per question.
    var timer;
    var count = 60;
    
    $("#counter").text(count);    
    timer = setTimeout(update, 1000);    
    function update() {
        if (count > 0)
        {
           $("#timer").text("Time Remaining: " + --count);
           timer = setTimeout(update, 1000);
        }        
    };
    
    // Start the game
    function gameStart() {
        $("#question-1-guesses").html("Options: " + theQuiz.answer1);
        $("#question-2-guesses").html("Options: " + theQuiz.answer2);
        $("#question-3-guesses").html("Options: " + theQuiz.answer3);
        $("#question-4-guesses").html("Options: " + theQuiz.answer4);
        $("#question-5-guesses").html("Options: " + theQuiz.answer5);
        $("#question-6-guesses").html("Options: " + theQuiz.answer6);

        
    }

    // cheecking for right or wrong answers: when the user clicks on an answer the results will be stored in the rightAnswer/wrongAnswer variables


    



//})
