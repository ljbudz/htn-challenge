import { request, gql } from "graphql-request";

const query = gql`
  {
    events {
      id
      name
      event_type
      permission
      start_time
      end_time
      description
      speakers {
        name
        profile_pic
      }
      public_url
      private_url
      related_events
    }
  }
`;

const proxy = "https://young-scrubland-37084.herokuapp.com/";
const endpoint = "https://api.hackthenorth.com/v3/graphql";

export const htn = async () => {
  const data = await request(endpoint, query);
  return data;
};
