import { Link } from 'react-router-dom';

const MobileMenu = ({ clickHandler }) => {
  return (
    <div className="absolute z-10 items-end top-14 right-5 border-solid bg-white flex flex-col rounded-lg border-black shadow-lg md:hidden">
      <div onClick={clickHandler}>
        <ul>
          <Link to={'/login'}>
            <li className="hover:bg-slate-100 p-2">
              <button>Login</button>
            </li>
          </Link>
          <Link to={'/register'}>
            <li className="hover:bg-slate-100 p-2">
              <button>Register</button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
