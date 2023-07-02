import { useEffect, useState, createContext } from 'react';
import { isUserLoggedIn, getUserInfo } from '../utils/utils';

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    email: '',
    profilePicture: '',
    created_at: '',
  });

  const contextValue = { isLoggedIn, setIsLoggedIn, userInfo, setUserInfo };

  const loginChecker = async () => {
    const ans = await isUserLoggedIn();
    setIsLoggedIn(ans);
  };

  const userInfoUpdater = async () => {
    const data = await getUserInfo();
    setUserInfo(data);
  };

  useEffect(() => {
    loginChecker();
  }, []);

  useEffect(() => {
    userInfoUpdater();
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
