import React from "react";

function Question() {
  return (
    <div className="space-y-8 ">
      <div className="quiz">
        <h4 className="question">Quiz 1 - What is a Debounce function in JavaScript?</h4>
        <form className="quizOptions">
          <label for="option1_q1">
            <input type="checkbox" id="option1_q1" />A function that is called after a certain time interval
          </label>

          <label for="option2_q1">
            <input type="checkbox" id="option2_q1" />A function that is called after a certain time interval
          </label>

          <label for="option3_q1">
            <input type="checkbox" id="option3_q1" />A function that is called after a certain time interval
          </label>

          <label for="option4_q1">
            <input type="checkbox" id="option4_q1" />A function that is called after a certain time interval
          </label>
        </form>
      </div>

      <div className="quiz">
        <h4 className="question">
          Quiz 2 - Which of the following is an example of a situation where you would use the Debounce function?
        </h4>
        <form className="quizOptions">
          <label for="option1_q2">
            <input type="checkbox" id="option1_q2" />A search bar where the results are displayed as you type.
          </label>

          <label for="option2_q2">
            <input type="checkbox" id="option2_q2" />A button that performs an action when clicked.
          </label>

          <label for="option3_q2">
            <input type="checkbox" id="option3_q2" />
            An animation that plays when a user hovers over an element.
          </label>

          <label for="option4_q2">
            <input type="checkbox" id="option4_q2" />
            All of the above.
          </label>
        </form>
      </div>
    </div>
  );
}

export default Question;
