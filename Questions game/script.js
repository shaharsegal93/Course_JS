(function(){
  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
    }


    Question.prototype.displayQuestions =
    function() {
        console.log(this.question);

        for(var i = 0; i< this.answers.length ; i++){
            console.log(i + ' : '+ this.answers[i]);
        }
    }

    Question.prototype.ValidateAnswer = function (ans, callback){
        var score;
        
        if(ans === this.correct){
            console.log('correct answer');
            score =  callback(true);
        } else {
            console.log('Wrong answer');
            score = callback(false);
        }
        
        this.displayScore(score)
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('the score is: ' + score)
        console.log('-----')
        
    }

    var question1 = new Question ('Where you born?' , ['Netanya', 'Haifa' , 'Tel Aviv'], 0);
    var question2 = new Question ('What is your name?' , ['Shani', 'Shahar', 'Snir'], 1);

    var questions = [question1, question2];

    function score(){
        var point = 0;
        return function (correct){  
            if(correct) {
                point++;
            }
            return point;
        }
    }
    
    var keepScore = score();
    
    function new_question(){

        var random = Math.floor(Math.random() * questions.length);

        questions[random].displayQuestions();

        var answer = prompt('Select correct answer');
        
        if(answer !== 'exit'){
            questions[random].ValidateAnswer(parseInt(answer) , keepScore);
            new_question();    
        } else{
            console.log('game finish');
        }
    }

    new_question();
    
})();


