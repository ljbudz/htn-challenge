import React, { useEffect, useState } from "react";
import './App.css';
import { htn } from "./apis/htn";
import {sortByStart, filterPublic, filterLink, restructureEvents} from "./helpers";
import EventList from "./components/EventList";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

const App = () => {
  const [perms, setPerms] = useState(false);
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      let {events} = await htn();

      // Filter out private events
      if(!perms) {
        events = events.filter(filterPublic);
      }
      
      // Get proper event link
      events = filterLink(events, perms);
      events.sort(sortByStart);
  
      const e = restructureEvents(events);
      setEvents(e);
    };
    getEvents();
  }, [perms]);

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
      <Footer/>
    </>
  );
}

export default App;
