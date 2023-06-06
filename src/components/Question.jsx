import React, { useState } from "react";

const Question = ({ question, handleNext }) => {
  const [selected, setSelected] = useState(null);
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleNativeNext=()=>{
    handleNext(selected)
    setSelected(null)
  }
 
  return (
    <>
      <div className="question-box">
        <div className="h5 question-title">{question.question}</div>
        <div className="options-container mt-3">
          <ul className="list-group ">
            {question.choices.map((choice, index) => {
              return (
                <li
                  key={index}
                  className={`option-item shadow my-2 list-group-item ${choice===selected? 'selected':''}`}
                >
                  <label
                    className="form-check-label radio-label w-100"
                    htmlFor={`ch${index}`}
                  >
                    <input
                      className="custom-radio"
                      name="porvince"
                      id={`ch${index}`}
                      type="radio"
                      checked={selected===choice}
                      onChange={handleChange}
                      value={choice}
                    />
                    {choice}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="row mt-3 justify-content-end">
        <div className="col-auto">
          <div
            className={`btn btn-grad ${selected==null && "disabled"}`}
            onClick={handleNativeNext}
          >
            Next
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
