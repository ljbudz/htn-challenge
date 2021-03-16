import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

const Box = styled.div`
  /* height: 260px; */
  padding: 25px;
  background-color: #183249;
  border-radius: 30px;
`;

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Box onClick={handleClick} >
        <FrontCard {...props} />
      </Box>
      <Box onClick={handleClick}>
        <BackCard {...props} />
      </Box>
    </ReactCardFlip>
  );
};

export default Card;
