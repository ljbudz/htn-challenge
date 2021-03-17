// Sort events by start time in ascending order
export const sortByStart = (e1, e2) => {
  if(e1.start_time > e2.start_time) {
    return 1;
  } 
  if(e1.start_time < e2.start_time) {
    return -1;
  }
  return 0;
}

// Filter out private events
export const filterPublic = ({permission}) => {
  return permission === "public";
}

// Set the url field on events to the proper link given
// the users permissions
export const filterLink = (events, isAuth) => {
  events.forEach(event => {
    const url = isAuth ? event.private_url : event.public_url;
    delete event.public_url;
    delete event.private_url;
    event.url = url;
  });

  return events;
}

// Convert array of events to object of arrays
// with dates as the keys
export const restructureEvents = (events) => {
  let temp = {};

  events.forEach((event) => {
    // Dates are the keys
    const date = new Date(event.start_time);
    const key = date.toLocaleDateString();
    // Add event to array of key-value pair
    if (temp.hasOwnProperty(key)) {
      temp[key].push(event);
    } else {
      temp[key] = [event];
    }
  });

  return temp;
}