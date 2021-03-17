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

  @media(max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const EventWrapper = styled.div`
  width: 0;
  flex: 1 1 0;
  padding: 0 20px;

  @media (max-width: 700px) {
    flex: 0 0 100%;
    padding: 0;
  }
`;

const CardWrapper = styled.div`
  padding: 20px 0;
`;

const DateTitle = styled.h1`
  color: #183249;
  font-size: 40px;
  margin: 30px 0 10px 0;
  @media (max-width: 700px) {
    margin: 20px 0 0 0;
  }
`;

const Header = styled.h1`
  color: #183249;
  font-size: 50px;
  text-decoration: underline;
  padding-left: 20px;
  margin: 30px 0 0 0;
  @media (max-width: 700px) {
    padding-left: 0;
    margin: 20px 0 0 0;
  }
`;

const EventList = (props) => {
  const events = props.events;

  // Get the list of releated events from their ids
  const getRelatedEvents = (ids) => {
    const relatedEvents = [];

    // Iterate through all events
    Object.entries(events).forEach(([date, eventList]) => {
      eventList.forEach(event => {
        // Check if event is related
        const id = event.id;
        if(ids.includes(id)) {
          relatedEvents.push(event);
        }
      });
    });

    return relatedEvents;
  };

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
          <Card {...event} getRelatedEvents={getRelatedEvents} />
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