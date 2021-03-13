import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import Avatar from "./Avatar";

const TYPE_TEXT = {
  workshop: "Workshop 🚧",
  activity: "Activity ✏️",
  tech_talk: "Tech Talk 📢"
};

const Box = styled.div`
  height: 225px;
  padding: 20px;
  background-color: #183249;
  border-radius: 30px;
`;

const Title = styled.h1`
  font-size: 26px;
`;

const CompactText = styled.h4`
  margin: 0;
`;

const AvatarRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding-left: 50px;
`;

const SpeakersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  const getAvatars = () => {
    const { speakers } = props;

    return speakers.map(({profile_pic, name}) => {
      return <Avatar key={name} profile_pic={profile_pic} name={name}/>
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Box onClick={handleClick}>
        <Title>{props.name}</Title>
        <h4>{"Start: " + formatDate(props.start_time)}</h4>
        <h4>{"End: " + formatDate(props.end_time)}</h4>
        <h4>{"Type: " + TYPE_TEXT[props.event_type]}</h4>
        <Link href={props.url} onClick={handleLinkClick}>{"Link to event 🔗"}</Link>
      </Box>
      <Box onClick={handleClick}>
        <CompactText>{"Description: "}</CompactText>
        <p>{props.description}</p>
        {props.event_type === "tech_talk" && (
          <SpeakersWrapper>
            <CompactText>Speakers:</CompactText>
            <AvatarRow>{getAvatars()}</AvatarRow>
          </SpeakersWrapper>
        )}
      </Box>
    </ReactCardFlip>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  event_type: PropTypes.string,
  permission: PropTypes.string,
  start_time: PropTypes.number,
  end_time: PropTypes.number,
  description: PropTypes.string,
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      profile_pic: PropTypes.string
    })
  ),
  url: PropTypes.string,
  related_events: PropTypes.arrayOf(PropTypes.number)
};

export default Card;
