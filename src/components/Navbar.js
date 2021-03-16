import React from 'react';
import styled, {keyframes} from 'styled-components';
import { ReactComponent as Logo } from "../images/htn-icon.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  padding-left: 5%;
  padding-right: 5%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #183249;
  z-index: 1000;
`;

const Icon = styled(Logo)`
  height: 40px;
  fill: white;
  margin-left: 10px;
  margin-right: 10px;
  animation: ${rotate} infinite 10s linear;
`;

const AuthBtn = styled.button`
  display: block;
  font-size: 15px;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.h1`
  color: white;
  font-size: 15px;
`;

const AuthWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 15px;
`;

const LoggedInWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  @media (max-width: 500px) {
    justify-content: flex-end;
  }
`;

const TitleText = styled(Text)`
  @media(max-width: 500px) {
    display: none;
  };
`;

const Navbar = (props) => {
  const isLoggedIn = props.authState;

  const getAuthBtn = () => {
    return (
      <AuthWrapper>
        {!isLoggedIn ? (
          <AuthBtn onClick={props.authBtn}>Log in</AuthBtn>
        ) : (
          <LoggedInWrapper>
            <TitleText>Welcome user!</TitleText>
            <AuthBtn onClick={props.authBtn}>Logout</AuthBtn>
          </LoggedInWrapper>
        )}
      </AuthWrapper>
    );
  };

  return (
    <Box>
      <Icon/>
      <TitleText>Hack the North 2021</TitleText>
      {getAuthBtn()}
    </Box>
  );
};

export default Navbar;