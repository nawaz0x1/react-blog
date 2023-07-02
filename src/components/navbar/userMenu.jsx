import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../utils/utils';
import { UserContext } from '../../contexts/userContext';

const UserManu = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);

  return (
    <div className="absolute z-10 items-end top-16 right-5 border-solid bg-white flex flex-col rounded-lg border-black shadow-lg">
      <div>
        <ul>
          <Link to={'/profile'}>
            <li className="hover:bg-slate-100 p-2">
              <button>Profile</button>
            </li>
          </Link>
          <Link to={'/profile/posts'}>
            <li className="hover:bg-slate-100 p-2">
              <button>My Posts</button>
            </li>
          </Link>
          <div
            onClick={() => {
              logout();
              setIsLoggedIn(false);
              navigate('/');
            }}
          >
            <li className="hover:bg-slate-100 p-2">
              <button>Log Out</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserManu;
