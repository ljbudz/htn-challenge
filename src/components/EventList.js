import React from 'react';
import styled from "styled-components";
import Card from "./Card";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

const DateTitle = styled.h1`
  color: #183249;
  font-size: 40px;
  margin-left: 30px;
`;

const Header = styled.h1`
  color: #183249;
  font-size: 50px;
  margin-left: 30px;
  text-decoration: underline;
`;

const EventList = (props) => {
  const events = props.events;

  const getEvents = () => {
    return Object.entries(events).map(([date, eventList]) => {
      return (
        <div key={date}>
          <DateTitle>{date}</DateTitle>
          {getEventCards(eventList)}
        </div>
      );
    });
  };

  const getEventCards = (e) => {
    return e.map((event) => {
      return <Card key={event.id} {...event} />;
    });
  };

  return (
    <>
      <Header>Event Schedule</Header>
      <Grid>
        {getEvents()}
      </Grid>
    </>
  );
};

export default EventList;