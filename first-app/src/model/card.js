
class Card  {

    category = "";
    correct_answer = "";
    incorrect_answers = [];
    answers = [];
    difficulty= "";
    question = "";
    type = "";
    contestada = false;
    correcta = false;
    constructor(json) {
        this.category = json.category;
        this.correct_answer = json.correct_answer;
        this.incorrect_answers = json.incorrect_answers;
        this.difficulty = json.difficulty;
        this.question = json.question;
        this.type = json.type;
    }

    buildAnswers() {
        this.answers = [...this.incorrect_answers];
        this.answers.push(this.correct_answer);
        this.answers = this.answers.sort(function () { return Math.random() - 0.5 });
    }

    selectAnswer(value) {

    }
}

export default Card;