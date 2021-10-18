/**
 * Reference from https://www.zoomtventertainment.com/web-series-movies/article/money-heist-fans-look-here-can-you-answer-these-15-questions-about-your-favourite-netflix-show/773682
 */
 const readline = require("readline");
 const r1 = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
 });
 console.log("bollywood fans look here! Can you answer these 10 questions about your favourite bollywood heros?")
 var name = "";
 r1.question("Enter Your Name: ", (userName) => {
     name = userName;
     console.log("Welcome " + name + "\n");
     quiz();
 });
 
 var i = 0;
 var score = 0;
 const questions = [
     "From where does Veeru propose to Basanti in Sholay?",
     "Which of these actors had never appeared in television advertisements until 2015?",
     "In which year was Aishwarya Rai crowned Miss World?",
     "Tabu's real name is:",
     "Lata Mangeshkar made her debut in Hindi playback singing with the movie:"
 ];
 const options = [
     ["Top of a roof","Top of a ladder","Top of a hill","Top of a water tank"],
     ["Govinda","Hrithik Roshan","Shah rukh khan","Anil Kapoor"],
     ["1993","1994","1995","1996","1997"],
     ["Shakeela Merchant","Taslim Khan","Tabakul","Tabassum Fatima Hashmi"],
     ["Andaaz","Deewar","Barsaat","Aap ki Sewa Main"]
 ];
 
 var quiz = () => {
     if (i === 0) {
         console.log(questions[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + ") " + options[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "4") {
                 score += 5;
                 console.log("Great Job!!" + "\tYour Score :- " + score);
                 i += 1;
                 quiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][3] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 quiz();
             }
 
         });
     } else if (i === 1) {
         console.log(questions[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + " - " + options[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "4") {
                 score += 5;
                 console.log("Great Job!!" + "\tYour Score :- " + score);
                 i += 1;
                 quiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][1] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 quiz();
             }
 
         });
     } else if (i === 2) {
         console.log(questions[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + " - " + options[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "2") {
                 score += 5;
                 console.log("Great Job!!" + "\tYour Score :- " + score);
                 i += 1;
                 quiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][2] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 quiz();
             }
 
         });
     } else if (i === 3) {
         console.log(questions[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + " - " + options[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "4") {
                 score += 5;
                 console.log("Great Job!!" + "\tYour Score :- " + score);
                 i += 1;
                 quiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][0] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 quiz();
             }
 
         });
     } else if (i === 4) {
         console.log(questions[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + " - " + options[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "4") {
                 score += 5;
                 console.log("Great Job!!" + "\tYour Score :- " + score);
                 i += 1;
                 quiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][0] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 quiz();
             }
 
         });
     } else {
         console.log("Final Score Of " + name + ": " + score + "/" + (questions.length * 5));
         r1.close();
     }
 }
 
