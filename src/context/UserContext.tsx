import { createContext, useContext } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { gql, useQuery } from '@apollo/client';

const getUserQuery = gql`
  query MyQuery($authid: String!) {
    profileUsingprofile_authid_key(authid: $authid) {
      about
      authid
      backimage
      id
      image
      name
      position
    }
  }
`;

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const { user: authUser, isLoaded: isAuthLoaded } = useUser();

  const {
    data,
    loading: isDbLoading,
    refetch,
  } = useQuery(getUserQuery, {
    variables: { authid: authUser?.id },
  });

  const dbUser = data?.profileUsingprofile_authid_key;

  const loading = isDbLoading || !isAuthLoaded;

  return (
    <UserContext.Provider
      value={{ dbUser, authUser, loading, reloadDbUser: refetch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);
