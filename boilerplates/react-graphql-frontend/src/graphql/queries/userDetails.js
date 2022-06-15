import { gql } from 'apollo-boost';

export const USER_DETAILS = gql`
  query Self {
    viewer {
      self {
        email
        admin
        roles {
          name
        }
        organizations {
          name
        }
      }
    }
  }
`;

export default USER_DETAILS;
