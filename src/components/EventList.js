import React from 'react';
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const EventWrapper = styled.div`
  width: 0;
  flex: 1 1 0;
  padding: 0 20px;
`;

const CardWrapper = styled.div`
  padding: 20px 0;
`;

const DateTitle = styled.h1`
  color: #183249;
  font-size: 40px;
`;

const Header = styled.h1`
  color: #183249;
  font-size: 50px;
  text-decoration: underline;
  padding-left: 20px;
`;

const EventList = (props) => {
  const events = props.events;

  const getEvents = () => {
    return Object.entries(events).map(([date, eventList]) => {
      return (
        <EventWrapper key={date}>
          <DateTitle>{date}</DateTitle>
          {getEventCards(eventList)}
        </EventWrapper>
      );
    });
  };

  const getEventCards = (e) => {
    return e.map((event) => {
      return (
        <CardWrapper key={event.id}>
          <Card {...event} />
        </CardWrapper>
      );
    });
  };

  return (
    <Container>
      <Header>Event Schedule</Header>
      <Grid>
        {getEvents()}
      </Grid>
    </Container>
  );
};

export default EventList;