import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
  background-color: #183249;
  z-index: 1000;
`;

const BottomText = styled.h4`
  font-size: 14px;
  font-weight: normal;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <BottomText>{"Made with ❤️ and ☕ by Lucas 👨‍💻"}</BottomText>
    </StyledFooter>
  )
};

export default Footer;