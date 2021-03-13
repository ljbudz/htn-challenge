export const sortByStart = (e1, e2) => {
  if(e1.start_time > e2.start_time) {
    return 1;
  } 
  if(e1.start_time < e2.start_time) {
    return -1;
  }
  return 0;
}

export const filterPublic = ({permission}) => {
  return permission === "public";
}

export const filterLink = (events, isAuth) => {
  events.forEach(event => {
    const url = isAuth ? event.private_url : event.public_url;
    delete event.public_url;
    delete event.private_url;
    event.url = url;
  });

  return events;
}

export const restructureEvents = (events) => {
  let temp = {};

  events.forEach((event) => {
    const date = new Date(event.start_time);
    const key = date.toLocaleDateString();
    if (temp.hasOwnProperty(key)) {
      temp[key].push(event);
    } else {
      temp[key] = [event];
    }
  });

  return temp;
}