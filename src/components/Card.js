import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";

const TYPE_TEXT = {
  "workshop": "Workshop 🚧",
  "activity": "Activity ✏",
  "tech_talk": "Tech Talk 📢"
}

const Box = styled.div`
  height: 200px;
  width: 90%;
  margin: 20px 30px;
  padding: 20px;
  background-color: #183249;
  border-radius: 30px;
  /* border: 4px solid #efaba0; */
  /* box-shadow: 0 0 0 10px #183249; */
`;


const Title = styled.h1`
  color: white;
  font-size: 26px;
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  src: ${props => props.src};
  z-index: 2000;
`;

const AvatarRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const BodyText = styled.h4`
  color: white;
`;

const Card = (props) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  }

  const getAvatars = () => {
    const { speakers } = props;
    
    return speakers.map(({name, profile_pic}) => {
      const src = profile_pic || "/user.png";
      return <Avatar key={name} src={src} />
    })
  }

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Box onClick={handleClick}>
        <Title>{props.name}</Title>
        <BodyText>{"Start: " + formatDate(props.start_time)}</BodyText>
        <BodyText>{"End: " + formatDate(props.end_time)}</BodyText>
        <BodyText>{"Type: " + TYPE_TEXT[props.event_type]}</BodyText>
      </Box>
      <Box onClick={handleClick}>
        <BodyText>{props.description}</BodyText>
        {props.event_type === "tech_talk" && <AvatarRow>{getAvatars()}</AvatarRow>}
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
  speakers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    profile_pic: PropTypes.string
  })),
  public_url: PropTypes.string,
  private_url: PropTypes.string,
  related_events: PropTypes.arrayOf(PropTypes.number)
};

export default Card;
