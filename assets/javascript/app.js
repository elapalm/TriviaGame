// at the start of the game the questions will apear and the timer will start when the user clicks on the page
// game set up- right answer count, wrong answer count, an object with array for each question for 1 right and 3 wrong answers, 


document.ready(){
    var rightAnswer = [];
    var wrongAnswer = [];
    var countdown = [];

    var theQuiz = [{
                answer: ["Februaary 14th, 1912", "January 1th, 1862", "February 24th 1863", "July 4th 1776"];
                rightAns: [0];
                wrongAns: [1, 2, 3];
            },
             {
                answer: ["Phoenix", "Flagstaff", "Tucson", "Mesa"];
                rightAns: [2];
            },
            {
                answer: ["362", "277", "159", "223"];
                rightAns: [1];
            },
            {
                answer: ["3", "4", "5", "6"];
                rightAns: [2];
            },
            {
                answer: ["Cottonwood", "Wilcox", "Sierra Vista", "Winslow"];
                rightAns: [3];
            },
            {
                answer: ["5", "11", "16", "1 too many!!!"];
                rightAns: [2];
            }
        ]


    // Timer total time alloted: 60 seconds. 10 seconds per question.

    // Start the game

    
    // cheecking for right or wrong answers: when the user clicks on an answer the results will be stored in the rightAnswer/wrongAnswer variables

    $("quest-1-guesses").on(click.theQuiz.answer);
        (rightAnswer === rightAns);
        console.log(rightAns)



}