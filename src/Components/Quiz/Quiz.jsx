import { useState, useRef, useMemo, useEffect } from "react";
import "./Quiz.css";
import { data } from "../../Assets/data";
const Quiz = () => {
  const [index, setIndex] = useState(0);
  // const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionRefs = useMemo(() => [Option1, Option2, Option3, Option4], []);

  const question = useMemo(() => data[index], [index]);

  useEffect(() => {
    optionRefs.forEach((ref) =>
      ref.current.classList.remove("wrong", "correct")
    );
  }, [optionRefs, question]);

  // Function check Answer
  const checkAnswer = (e, selectedAnswer) => {
    // if (lock === false) {
    //   if (question.ans === selectedAnswer) {
    //     e.target.classList.add("correct");
    //     setLock(true);
    //     setScore((prev) => prev + 1);
    //   } else {
    //     e.target.classList.add("wrong");
    //     setLock(true);
    //     optionRefs [question.ans - 1].current.classList.add("correct");
    //   }
    // }
    if (!lock) {
      const isCorrect = question.ans === selectedAnswer;
      e.target.classList.add(isCorrect ? "correct" : "wrong");

      if (!isCorrect) {
        optionRefs[question.ans - 1].current.classList.add("correct");
      }

      setLock(true);
      setScore((prev) => (isCorrect ? prev + 1 : prev));
    }
  };

  // Function Next

  const goToNextQuestion = () => {
    if (lock) {
      if (index === data.length - 1) setResult(true);
      else {
        setIndex((prev) => prev + 1);
        setLock(false);
      }
    }
  };

  // Function resetQuiz
  const resetQuiz = () => {
    setIndex(0);
    // setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}.{question.question}
          </h2>
          <ul>
            <li
              ref={Option1}
              onClick={(e) => {
                checkAnswer(e, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAnswer(e, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAnswer(e, 3);
              }}
            >
              {question.option3}
            </li>
            <li
              ref={Option4}
              onClick={(e) => {
                checkAnswer(e, 4);
              }}
            >
              {question.option4}
            </li>
          </ul>
          <button onClick={goToNextQuestion}>Next</button>
          <div className="index">
            {index + 1} of {data.length} question
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={resetQuiz}>reset</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
