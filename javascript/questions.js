var sec = 60;

(function() {
    
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 5;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    });
    startTimer();
})();


let questions = [
    {
      id: 1,
      question: "Which of the following is not a method in the “JSON” object according to the ECMAScript specification?",
      answer: "JSON.fromString",
      options: [
        "JSON.stringify",
        "JSON.fromString",
        "JSON.parse",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "In web design, what does CSS stand for?",
      answer: "cascading style sheet",
      options: [
        "counter strike: source",
        "corrective style sheet",
        "cascading style sheet",
        "computer style sheet"
      ]
    },
    {
      id: 3,
      question: "How do you define a function called “fName”?",
      answer: "function fName() { }",
      options: [
        "function fName: { }",
        "func fName = function () {}",
        "function fName() { }",
        "None of these"
      ]
    },
    {
      id: 4,
      question: "What keyword is used to begin a conditional statement?",
      answer: "if",
      options: [
        "when",
        "how",
        "if",
        "condition"
      ]
    },
    {
      id: 5,
      question: "Which String prototype method is capable of removing a character from a string?",
      answer: "replace",
      options: [
        "delete()",
        "remove()",
        "replace()",
        "destroy()"
      
      ]
    },
    {
      id: 6,
      question: "What is result of the following expression: var a = “test”; console.log(!!a);",
      answer: "true",
      options: [
        "SyntaxError",
        "false",
        "true",
        "undefined"
      ]
    }
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("timerDisplay", sec);
      // clearInterval(mytime);
      location.href = "endquiz.html";
    }

  
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    } else {
     sec -= 5;
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  
