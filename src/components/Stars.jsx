import React from "react";
import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";

const ReviewStar = styled(AiFillStar)`
  color: #ffcd3c;
  font-size: 1.5rem;
`;
const Starline = styled.div`
    padding-bottom: 5px;
    display: inline-flex;
`;
const Stars = ({ rating = 5 }) => {
  const ratings = Array.from(new Array(Math.floor(rating)));

  return (
    <Starline>
      {ratings.map((rate, index) => {
        return <ReviewStar key={index} />;
      })}
    </Starline>
  );
};

export default Stars;
