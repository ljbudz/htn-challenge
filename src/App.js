import React, { useEffect, useState } from "react";
import './App.css';
import { htn } from "./apis/htn";
import {sortByStart, filterPublic} from "./helpers";
import EventList from "./components/EventList";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

const App = () => {
  const [perms, setPerms] = useState(false);
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      let {events} = await htn();
      if(!perms) {
        events = events.filter(filterPublic);
      }

      events.sort(sortByStart);

      let temp = {};

      events.forEach(event => {
        const date = new Date(event.start_time);
        const key = date.toLocaleDateString();
        if(temp.hasOwnProperty(key)) {
          temp[key].push(event);
        } else {
          temp[key] = [event];
        }
      });
      setEvents(temp);
    };
    getEvents();
  });

  const closeLogin = () => {
    setIsModalOpen(false);
  }

  const onAuthenticate = () => {
    setIsModalOpen(false);
    setPerms(true);
  }

  const handleAuthBtn = () => {
    if(perms) {
      setPerms(false);
    } else {
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={closeLogin}>
        <LoginForm onAuthenticate={onAuthenticate}/>
      </Modal>
      <Navbar authBtn={handleAuthBtn} authState={perms} />
      <EventList events={events}/>
    </>
  );
}

export default App;
