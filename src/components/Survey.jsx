import React, { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";

const Survey = ({ data }) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const handleNext = (selectedChoice) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestion] = selectedChoice;
      return newAnswers;
    });
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = (nav = false) => {
    const data = { data: answers };
    fetch("https://experttraderpk.com/api/junaid-survey-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (nav) {
          navigate("/thanks");
        }
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (currentQuestion >= data.length) {
      handleSubmit(false);
    }
  }, [currentQuestion]);

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1>Site Survey</h1>
              {currentQuestion < data.length ? (
                <Question
                  question={data[currentQuestion]}
                  handleNext={handleNext}
                />
              ) : (
                <div className="row mt-4">
                  <div className="col-12">
                    <h4>Survey Completed</h4>
                    <button
                      onClick={()=>handleSubmit(true)}
                      className="btn btn-grad"
                    >
                      Submit Answers
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
