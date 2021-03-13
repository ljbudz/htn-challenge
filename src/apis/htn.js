import { GraphQLClient, gql } from "graphql-request";

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
const client = new GraphQLClient(endpoint, {
  headers: {
    method: "get",
    mode: "no-cors"
  }
});

export const htn = async () => {
  const data = await client.request(query);
  return data;
};
