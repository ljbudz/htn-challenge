import React from "react";
import styled from "styled-components";

const TYPE_TEXT = {
  workshop: "Workshop 🚧",
  activity: "Activity ✏️",
  tech_talk: "Tech Talk 📢"
};

const Title = styled.h1`
  font-size: 26px;
`;

const CompactText = styled.h4`
  font-weight: normal;
  margin: 0.5rem 0;
`;

const Link = styled.a.attrs(props => ({
  target: "_blank"
}))`
  text-decoration: none;
  color: white;
  margin: 0;
  padding: 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 400px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: ${props => props.isLeft ? 0 : "5px"};
  padding-right: ${props => props.isLeft ? "5px" : 0};
  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
  }
`;

const FrontCard = (props) => {

  // Converts unix timestamp to locale time
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const getRelatedEvents = () => {
    const relatedEvent = props.getRelatedEvents(props.related_events);

    return relatedEvent.map(({ name, url }) => {
      return (
        <CompactText key={name} style={{ margin: 0 }}>
          {name}
          <Link href={url} onClick={handleLinkClick}>
            {" 🔗"}
          </Link>
        </CompactText>
      );
    });
  };

  const getText = (label, text) => {
    return (
      <>
        <CompactText>
          <strong>{label}</strong>
          {text}
        </CompactText>
      </>
    );
  };

  return (
    <>
      <Title>{props.name}</Title>
      <TextContainer>
        <Column isLeft>
          {getText("Start: ", formatDate(props.start_time))}
          {getText("End: ", formatDate(props.end_time))}
          {getText("Type: ", TYPE_TEXT[props.event_type])}
          <Link href={props.url} onClick={handleLinkClick}>
            {getText("Link to event 🔗", null)}
          </Link>
        </Column>
        <Column>
          {getText("Related Events:", null)}
          {getRelatedEvents()}
        </Column>
      </TextContainer>
    </>
  );
};

export default FrontCard;