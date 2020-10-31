import React from "react"
import {Button, ButtonGroup} from "react-bootstrap";


class Question extends React.Component {
    constructor(props) {
            super(props)

            this.state = {
                currentQuestion: 0,
                count: 0,
            }
            this.handleSubmit = this.handleSubmit.bind(this)
            this.generateAnswers = this.generateAnswers.bind(this)
            this.generateQuestion = this.generateQuestion.bind(this)
        }

    generateQuestion() {
        return this.props.questions[this.state.currentQuestion].question
    }

    generateAnswers() {
        let correct = this.props.questions[this.state.currentQuestion].correct
        let answers = this.props.questions[this.state.currentQuestion].incorrect
        answers.push(correct)
        return this.shuffle(answers)
    }

    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    correctAnswer() {
        return this.props.questions[this.state.currentQuestion].correct
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (e.currentTarget.value === this.correctAnswer()) this.setState({count: this.state.count + 1})
        await this.setState({currentQuestion: this.state.currentQuestion + 1})
    }

    handleRefresh() {
        window.location.reload(true)
    }

        
        render() {
            return this.state.currentQuestion === this.props.questions.length ? (
                <div>
                    <h1 className="ml-5 mt-5 display-one text-muted">Congrats You Scored: {this.state.count} / {this.props.questions.length}</h1>
                    <Button block variant="secondary" size="md" className="display-one my-3 w-50 ml-5 py-3" onClick={() => this.handleRefresh()}>Try Again?</Button>
                </div>
            ) : (
                <div>
                    <div className="card w-3 mb-3">
                        <div className="card-body">
                            <h5 className="card-title text-muted">Current Score</h5>
                            <p className="card-text text-muted">{this.state.count}</p>
                        </div>
                    </div>
                   <h1 className="text-muted ml-5 display-one">{this.props.questions[this.state.currentQuestion].question}</h1>
                        {this.generateAnswers().map((answer, idx) => {
                            return <Button block variant="secondary" size="md" className="display-one my-3 w-50 ml-5 py-3" onClick={this.handleSubmit} value={answer} key={idx}>{answer}</Button>
                        })}
                </div>
        )
    }
}
export default Question