import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import Avatar, { genConfig } from 'react-nice-avatar';

const ProfilePicture = ({ isMenuCicked, setIsManuClicked }) => {
  const { userInfo } = useContext(UserContext);
  const { profilePicture, email } = userInfo;

  const config = genConfig(email);

  return (
    <div
      onClick={() => {
        setIsManuClicked(!isMenuCicked);
      }}
    >
      {profilePicture ? (
        <img
          className="w-10 h-10 rounded-full"
          src={profilePicture}
          alt="ProfilePicture"
        />
      ) : (
        <Avatar className="h-11 w-11" {...config} />
      )}
    </div>
  );
};

export default ProfilePicture;
