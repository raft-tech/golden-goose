import { gql } from 'apollo-boost';

export const MUTATION_LOGIN = gql`
  mutation UserLogin($credentials: AuthProviderCredentialsInput) {
    loginUser(credentials: $credentials) {
      token
      user {
        email
        roles {
          name
        }
      }
    }
  }
`;

export default MUTATION_LOGIN;
