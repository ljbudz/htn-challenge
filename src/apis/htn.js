import { request, gql } from "graphql-request";

// Get all events and all of their fields
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

const endpoint = "https://api.hackthenorth.com/v3/graphql";

// Returns promise to request 
export const htn = async () => {
  const data = await request(endpoint, query);
  return data;
};
