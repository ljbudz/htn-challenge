import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import { useResizeDetector } from "react-resize-detector";

const Box = styled.div`
  min-height: ${props => `${props.minHeight}px`};
  padding: 25px;
  background-color: #183249;
  border-radius: 30px;
`;

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [minFrontHeight, setMinFrontHeight] = useState(0);
  const [minBackHeight, setMinBackHeight] = useState(0);
  const frontRef = useRef();
  const backRef = useRef();
  const { height: frontHeight } = useResizeDetector({ targetRef: frontRef });
  const { height: backHeight } = useResizeDetector({ targetRef: backRef });

  useEffect(() => {
    if (frontHeight && backHeight) {
      if(frontHeight > backHeight) {
        if(minFrontHeight > minBackHeight) {
          setMinFrontHeight(0);
        } else {
          setMinBackHeight(frontHeight);
        }
      } else if (backHeight > frontHeight) {
        if (minBackHeight > minFrontHeight) {
          setMinBackHeight(0);
        } else {
          setMinFrontHeight(backHeight);
        }
      }
    }
  }, [frontHeight, backHeight]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Box onClick={handleClick} ref={frontRef} minHeight={minFrontHeight}>
        <FrontCard {...props} />
      </Box>
      <Box onClick={handleClick} ref={backRef} minHeight={minBackHeight}>
        <BackCard {...props} />
      </Box>
    </ReactCardFlip>
  );
};

export default Card;
