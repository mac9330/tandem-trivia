import React from "react"
import json from "../data/Apprentice_TandemFor400_Data.json"
import Question from "./question";


class Trivia extends React.Component {
    constructor(props) {
            super(props)

            this.state = {
                questions: this.shuffle(json),
                count: 0,

            }
        }

    shuffle(array) {
        return array.sort(() => Math.random() - 0.5).slice(0, 10);
    }

        
        render() {
            return (
                <div>
                   <Question questions={this.state.questions} count={this.state.count} />
                </div>
        )
    }
}
export default Trivia
// export default connect(msp, mdp)(Trivia);