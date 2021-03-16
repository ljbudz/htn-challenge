import React from 'react';
import styled from "styled-components";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SpeakersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 5px 0;
`;

const AvatarRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding-left: 50px;
`;

const CompactText = styled.h4`
  font-weight: normal;
  margin: 0.5rem 0;
`;

const BackCard = (props) => {

  const getAvatars = () => {
    const { speakers } = props;

    return speakers.map(({ profile_pic, name }) => {
      return <Avatar key={name} profile_pic={profile_pic} name={name} />;
    });
  };

  return (
    <Wrapper>
      <CompactText>
        <strong>{"Description: "}</strong>
      </CompactText>
      <CompactText>{props.description}</CompactText>
      {props.event_type === "tech_talk" && (
        <SpeakersWrapper>
          <strong>{"Speakers: "}</strong>
          <AvatarRow>{getAvatars()}</AvatarRow>
        </SpeakersWrapper>
      )}
    </Wrapper>
  );
};

export default BackCard;