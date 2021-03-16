import React from "react";
import styled from "styled-components";
import user from "../images/user.png";

const AvatarImage = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #efaba0;
  src: ${(props) => props.src};
  z-index: 2000;
`;

const AvatarWrapper = styled.div`
  display: flex;
  height: 80px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const AvatarName = styled.h4`
  color: white;
  margin: 0;
`;

const Avatar = (props) => {
  const { name, profile_pic } = props;
  const src = profile_pic || user;

  return (
    <AvatarWrapper>
      <AvatarImage src={src} />
      <AvatarName>{name}</AvatarName>
    </AvatarWrapper>
  );
};

export default Avatar;
