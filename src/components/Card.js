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
  const [minFrontHeight, setMinFrontHeight] = useState(0);  // min-height of front card box
  const [minBackHeight, setMinBackHeight] = useState(0);    // min-height of back card box
  const frontRef = useRef();                                // Ref to front card box
  const backRef = useRef();                                 // Ref to back card box
  const { height: frontHeight } = useResizeDetector({ targetRef: frontRef });
  const { height: backHeight } = useResizeDetector({ targetRef: backRef });

  useEffect(() => {
    // Null variable check
    if (frontHeight && backHeight) {
      if(frontHeight > backHeight) {
        // Front card is too large
        if(minFrontHeight > minBackHeight) {
          setMinFrontHeight(0);
        } else {
          // Back card is too small
          setMinBackHeight(frontHeight);
        }
      } else if (backHeight > frontHeight) {
        // Back card is too large
        if (minBackHeight > minFrontHeight) {
          setMinBackHeight(0);
        } else {
          // Front card is too small
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
