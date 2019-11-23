import { gql } from 'apollo-server';

export default gql`
  type Query {
    Hello: String
    Teams: [Team]
  }

  type Team {
    id: Int
    name: String
    abbreviation: String
    yearStarted: Int
    venue: String
    division: String
    conference: String
    websiteUrl: String
  }
`;
