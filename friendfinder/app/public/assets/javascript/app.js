$(document).ready(function() { 
var userScoreQ1 = 0
var answered = 0
$("#q1b1").click(function(){
    userScoreQ1++
    answered++
    console.log("User score Q1: " + userScoreQ1);
    $("#q1b2").hide();
    $("#q1b3").hide();
    $("#q1b4").hide();
    $("#q1b5").hide();
  });

  $("#q1b2").click(function(){
    userScoreQ1+=2
    answered++
    console.log("User score Q1: " + userScoreQ1);
    $("#q1b1").hide();
    $("#q1b3").hide();
    $("#q1b4").hide();
    $("#q1b5").hide();
  });

  $("#q1b3").click(function(){
    userScoreQ1+=3
    answered++
    console.log("User score Q1: " + userScoreQ1);
    $("#q1b1").hide();
    $("#q1b2").hide();
    $("#q1b4").hide();
    $("#q1b5").hide();
  });

  $("#q1b4").click(function(){
    userScoreQ1+=4
    answered++
    console.log("User score Q1: " + userScoreQ1);
    $("#q1b1").hide();
    $("#q1b2").hide();
    $("#q1b3").hide();
    $("#q1b5").hide();
  });

  $("#q1b5").click(function(){
    userScoreQ1+=5
    answered++
    console.log("User score Q1: " + userScoreQ1);
    $("#q1b1").hide();
    $("#q1b2").hide();
    $("#q1b4").hide();
    $("#q1b5").hide();
  });

  var userScoreQ2 = 0
  $("#q2b1").click(function(){
    userScoreQ2++
    answered++
    console.log("User score Q2: " + userScoreQ2);
    $("#q2b2").hide();
    $("#q2b3").hide();
    $("#q2b4").hide();
    $("#q2b5").hide();
  });

  var userScoreQ2 = 0
  $("#q2b2").click(function(){
    userScoreQ2+=2
    answered++
    console.log("User score Q2: " + userScoreQ2);
    $("#q2b1").hide();
    $("#q2b3").hide();
    $("#q2b4").hide();
    $("#q2b5").hide();
  });

  var userScoreQ2 = 0
  $("#q2b3").click(function(){
    userScoreQ2+=3
    answered++
    console.log("User score Q2: " + userScoreQ2);
    $("#q2b1").hide();
    $("#q2b2").hide();
    $("#q2b4").hide();
    $("#q2b5").hide();
  });

  var userScoreQ2 = 0
  $("#q2b4").click(function(){
    userScoreQ2+=4
    answered++
    console.log("User score Q2: " + userScoreQ2);
    $("#q2b1").hide();
    $("#q2b3").hide();
    $("#q2b2").hide();
    $("#q2b5").hide();
  });

  var userScoreQ2 = 0
  $("#q2b5").click(function(){
    userScoreQ2+=5
    answered++
    console.log("User score Q2: " + userScoreQ2);
    $("#q2b1").hide();
    $("#q2b3").hide();
    $("#q2b4").hide();
    $("#q2b2").hide();
  });

  var userScoreQ3 = 0
  $("#q3b1").click(function(){
    userScoreQ3++
    answered++
    console.log("User score Q3: " + userScoreQ3);
    $("#q3b1").hide();
    $("#q3b3").hide();
    $("#q3b4").hide();
    $("#q3b2").hide();
  });

  var userScoreQ3 = 0
  $("#q3b2").click(function(){
    userScoreQ3+=2
    answered++
    console.log("User score Q3: " + userScoreQ3);
    $("#q3b1").hide();
    $("#q3b3").hide();
    $("#q3b4").hide();
    $("#q3b5").hide();
  });

  var userScoreQ3 = 0
  $("#q3b3").click(function(){
    userScoreQ3+=3
    answered++
    console.log("User score Q3: " + userScoreQ3);
    $("#q3b1").hide();
    $("#q3b2").hide();
    $("#q3b4").hide();
    $("#q3b5").hide();
  });

  var userScoreQ3 = 0
  $("#q3b4").click(function(){
    userScoreQ3+=4
    answered++
    console.log("User score Q3: " + userScoreQ3);
    $("#q3b1").hide();
    $("#q3b2").hide();
    $("#q3b3").hide();
    $("#q3b5").hide();
  });

  var userScoreQ3 = 0
  $("#q3b5").click(function(){
    userScoreQ3+=5
    answered++
    console.log("User score Q3: " + userScoreQ3);
    $("#q3b1").hide();
    $("#q3b2").hide();
    $("#q3b3").hide();
    $("#q3b4").hide();
  });

  var userScoreQ4 = 0
  $("#q4b1").click(function(){
    userScoreQ4++
    answered++
    console.log("User score Q4: " + userScoreQ4);
    $("#q4b5").hide();
    $("#q4b3").hide();
    $("#q4b4").hide();
    $("#q4b2").hide();
  });

  var userScoreQ4 = 0
  $("#q4b2").click(function(){
    userScoreQ4+=2
    answered++
    console.log("User score Q4: " + userScoreQ4);
    $("#q4b3").hide();
    $("#q4b4").hide();
    $("#q4b5").hide();
  });

  var userScoreQ4 = 0
  $("#q4b3").click(function(){
    userScoreQ4+=3
    answered++
    console.log("User score Q4: " + userScoreQ4);
    $("#q4b1").hide();
    $("#q4b2").hide();
    $("#q4b4").hide();
    $("#q4b5").hide();
  });

  var userScoreQ4 = 0
  $("#q4b4").click(function(){
    userScoreQ4+=4
    answered++
    console.log("User score Q4: " + userScoreQ4);
    $("#q4b1").hide();
    $("#q4b2").hide();
    $("#q4b3").hide();
    $("#q4b5").hide();
  });

  var userScoreQ4 = 0
  $("#q4b5").click(function(){
    userScoreQ4+=5
    answered++
    console.log("User score Q4: " + userScoreQ4);
    $("#q4b1").hide();
    $("#q4b2").hide();
    $("#q4b3").hide();
    $("#q4b4").hide();
  });

  var userScoreQ5 = 0
  $("#q5b1").click(function(){
    userScoreQ5++
    answered++
    console.log("User score Q5: " + userScoreQ5);
    $("#q5b5").hide();
    $("#q5b3").hide();
    $("#q5b4").hide();
    $("#q5b2").hide();
  });

  var userScoreQ5 = 0
  $("#q5b2").click(function(){
    userScoreQ5+=2
    answered++
    console.log("User score Q5: " + userScoreQ5);
    $("#q5b5").hide();
    $("#q5b3").hide();
    $("#q5b4").hide();
    $("#q5b1").hide();
  });

  var userScoreQ5 = 0
  $("#q5b3").click(function(){
    userScoreQ5+=3
    answered++
    console.log("User score Q5: " + userScoreQ5);
    $("#q5b5").hide();
    $("#q5b2").hide();
    $("#q5b4").hide();
    $("#q5b1").hide();
  });

  var userScoreQ5 = 0
  $("#q5b4").click(function(){
    userScoreQ5+=4
    answered++
    console.log("User score Q5: " + userScoreQ5);
    $("#q5b5").hide();
    $("#q5b2").hide();
    $("#q5b3").hide();
    $("#q5b1").hide();
  });

  var userScoreQ5 = 0
  $("#q5b5").click(function(){
    userScoreQ5+=5
    answered++
    console.log("User score Q5: " + userScoreQ5);
    $("#q5b3").hide();
    $("#q5b2").hide();
    $("#q5b4").hide();
    $("#q5b1").hide();
  });

  var userScoreQ6 = 0
  $("#q6b1").click(function(){
    userScoreQ6++
    answered++
    console.log("User score Q6: " + userScoreQ6);
    $("#q6b5").hide();
    $("#q6b3").hide();
    $("#q6b4").hide();
    $("#q6b2").hide();
  });

  var userScoreQ6 = 0
  $("#q6b2").click(function(){
    userScoreQ6+=2
    answered++
    console.log("User score Q6: " + userScoreQ6);
    $("#q6b5").hide();
    $("#q6b3").hide();
    $("#q6b4").hide();
    $("#q6b1").hide();
  });

  var userScoreQ6 = 0
  $("#q6b3").click(function(){
    userScoreQ6+=3
    answered++
    console.log("User score Q6: " + userScoreQ6);
    $("#q6b5").hide();
    $("#q6b2").hide();
    $("#q6b4").hide();
    $("#q6b1").hide();
  });

  var userScoreQ6 = 0
  $("#q6b4").click(function(){
    userScoreQ6+=4
    answered++
    console.log("User score Q6: " + userScoreQ6);
    $("#q6b5").hide();
    $("#q6b2").hide();
    $("#q6b3").hide();
    $("#q6b1").hide();
  });

  var userScoreQ6 = 0
  $("#q6b5").click(function(){
    userScoreQ6+=5
    answered++
    console.log("User score Q6: " + userScoreQ6);
    $("#q6b4").hide();
    $("#q6b2").hide();
    $("#q6b3").hide();
    $("#q6b1").hide();
  });

  var userScoreQ7 = 0
  $("#q7b1").click(function(){
    userScoreQ7++
    answered++
    console.log("User score Q7: " + userScoreQ7);
    $("#q7b5").hide();
    $("#q7b3").hide();
    $("#q7b4").hide();
    $("#q7b2").hide();
  });

  var userScoreQ7 = 0
  $("#q7b2").click(function(){
    userScoreQ7+=2
    answered++
    console.log("User score Q7: " + userScoreQ7);
    $("#q7b5").hide();
    $("#q7b3").hide();
    $("#q7b4").hide();
    $("#q7b1").hide();
  });

  var userScoreQ7 = 0
  $("#q7b3").click(function(){
    userScoreQ7+=3
    answered++
    console.log("User score Q7: " + userScoreQ7);
    $("#q7b5").hide();
    $("#q7b2").hide();
    $("#q7b4").hide();
    $("#q7b1").hide();
  });

  var userScoreQ7 = 0
  $("#q7b4").click(function(){
    userScoreQ7+=4
    answered++
    console.log("User score Q7: " + userScoreQ7);
    $("#q7b5").hide();
    $("#q7b2").hide();
    $("#q7b3").hide();
    $("#q7b1").hide();
  });

  var userScoreQ7 = 0
  $("#q7b5").click(function(){
    userScoreQ7+=5
    answered++
    console.log("User score Q7: " + userScoreQ7);
    $("#q7b4").hide();
    $("#q7b2").hide();
    $("#q7b3").hide();
    $("#q7b1").hide();
  });

  var userScoreQ8 = 0
  $("#q8b1").click(function(){
    userScoreQ8++
    answered++
    console.log("User score Q8: " + userScoreQ8);
    $("#q8b5").hide();
    $("#q8b3").hide();
    $("#q8b4").hide();
    $("#q8b2").hide();
  });

  var userScoreQ8 = 0
  $("#q8b2").click(function(){
    userScoreQ8+=2
    answered++
    console.log("User score Q8: " + userScoreQ8);
    $("#q8b5").hide();
    $("#q8b3").hide();
    $("#q8b4").hide();
    $("#q8b1").hide();
  });

  var userScoreQ8 = 0
  $("#q8b3").click(function(){
    userScoreQ8+=3
    answered++
    console.log("User score Q8: " + userScoreQ8);
    $("#q8b5").hide();
    $("#q8b2").hide();
    $("#q8b4").hide();
    $("#q8b1").hide();
  });

  var userScoreQ8 = 0
  $("#q8b4").click(function(){
    userScoreQ8+=4
    answered++
    console.log("User score Q8: " + userScoreQ8);
    $("#q8b5").hide();
    $("#q8b2").hide();
    $("#q8b3").hide();
    $("#q8b1").hide();
  });

  var userScoreQ8 = 0
  $("#q8b5").click(function(){
    userScoreQ8+=5
    answered++
    console.log("User score Q8: " + userScoreQ8);
    $("#q8b4").hide();
    $("#q8b2").hide();
    $("#q8b3").hide();
    $("#q8b1").hide();
  });

  var userScoreQ9 = 0
  $("#q9b1").click(function(){
    userScoreQ9++
    answered++
    console.log("User score Q9: " + userScoreQ9);
    $("#q9b5").hide();
    $("#q9b3").hide();
    $("#q9b4").hide();
    $("#q9b2").hide();
  });

  var userScoreQ9 = 0
  $("#q9b2").click(function(){
    userScoreQ9+=2
    answered++
    console.log("User score Q9: " + userScoreQ9);
    $("#q9b5").hide();
    $("#q9b3").hide();
    $("#q9b4").hide();
    $("#q9b1").hide();
  });

  var userScoreQ9 = 0
  $("#q9b3").click(function(){
    userScoreQ9+=3
    answered++
    console.log("User score Q9: " + userScoreQ9);
    $("#q9b5").hide();
    $("#q9b2").hide();
    $("#q9b4").hide();
    $("#q9b1").hide();
  });

  var userScoreQ9 = 0
  $("#q9b4").click(function(){
    userScoreQ9+=4
    answered++
    console.log("User score Q9: " + userScoreQ9);
    $("#q9b5").hide();
    $("#q9b2").hide();
    $("#q9b3").hide();
    $("#q9b1").hide();
  });

  var userScoreQ9 = 0
  $("#q9b5").click(function(){
    userScoreQ9+=5
    answered++
    console.log("User score Q9: " + userScoreQ9);
    $("#q9b4").hide();
    $("#q9b2").hide();
    $("#q9b3").hide();
    $("#q9b1").hide();
  });

  var userScoreQ10 = 0
  $("#q10b1").click(function(){
    userScoreQ10++
    answered++
    console.log("User score Q10: " + userScoreQ10);
    $("#q10b5").hide();
    $("#q10b3").hide();
    $("#q10b4").hide();
    $("#q10b2").hide();
  });

  var userScoreQ10 = 0
  $("#q10b2").click(function(){
    userScoreQ10+=2
    answered++
    console.log("User score Q10: " + userScoreQ10);
    $("#q10b5").hide();
    $("#q10b3").hide();
    $("#q10b4").hide();
    $("#q10b1").hide();
  });

  var userScoreQ10 = 0
  $("#q10b3").click(function(){
    userScoreQ10+=3
    answered++
    console.log("User score Q10: " + userScoreQ10);
    $("#q10b5").hide();
    $("#q10b2").hide();
    $("#q10b4").hide();
    $("#q10b1").hide();
  });

  var userScoreQ10 = 0
  $("#q10b4").click(function(){
    userScoreQ10+=4
    answered++
    console.log("User score Q10: " + userScoreQ10);
    $("#q10b5").hide();
    $("#q10b2").hide();
    $("#q10b3").hide();
    $("#q10b1").hide();
  });

  var userScoreQ10 = 0
  $("#q10b5").click(function(){
    userScoreQ10+=5
    answered++
    console.log("User score Q10: " + userScoreQ10);
    $("#q10b4").hide();
    $("#q10b2").hide();
    $("#q10b3").hide();
    $("#q10b1").hide();
  });

  $("#submitbtn").click(function(){
    event.preventDefault();
     // Validate all that all questions have been answered
if (answered <= 9)    
alert("You forgot to answer one or more questions!");

else if (answered === 10) {
var totalUserScore = [userScoreQ1, userScoreQ2, userScoreQ3, userScoreQ4, userScoreQ5, userScoreQ6, userScoreQ7, userScoreQ8, userScoreQ9, userScoreQ10];
console.log(totalUserScore);
}
});
})


  

 
