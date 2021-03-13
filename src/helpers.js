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