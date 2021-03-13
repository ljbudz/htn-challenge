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

export const htn = async () => {
  const data = await request("https://api.hackthenorth.com/v3/graphql", query, {
    "content-type": "none"
  });
  return data;
}

 