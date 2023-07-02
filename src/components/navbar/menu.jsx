import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import DesktopMenu from './desktopMenu';
import MobileMenuButton from './mobileMenuButton';
import Write from './writeButton';
import ProfilePicture from './profilePicture';
import UserManu from './userMenu';

const AuthButtons = () => {
  const { isLoggedIn } = useContext(UserContext);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <div className="flex">
          <Write />
          <ProfilePicture
            isMenuCicked={isMenuClicked}
            setIsManuClicked={setIsMenuClicked}
          />
          {isMenuClicked && <UserManu setIsMenuClicked={setIsMenuClicked} />}
        </div>
      ) : (
        <>
          <DesktopMenu />
          <MobileMenuButton />
        </>
      )}
    </>
  );
};

export default AuthButtons;
