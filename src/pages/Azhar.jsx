import React, { useState } from "react";
import Survey from "../components/Survey";

const Azhar = () => {
  const surveyData = [
    {
      question: "What do you like most about Junaid",
      choices: ["Behaviour", "Nature", "Name", "Language"],
    },
    {
      question: "Do you like him?",
      choices: ["Yes", "Yes, as a friend", "Rather Not Say", "No"],
    },
    {
      question: "Is he caring",
      choices: ["Yes", "No"],
    },
    // Add more questions...
  ];

  return <Survey data={surveyData} />;
};

export default Azhar;
