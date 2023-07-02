import { Link } from 'react-router-dom';

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex">
      <div className="border w-fit rounded-xl shadow-sm">
        <Link to={'/login'}>
          <button className="px-4 py-2 rounded-l-xl text-white m-0 bg-blue-500 hover:bg-blue-600 transition">
            Login
          </button>
        </Link>
        <Link to={'/register'}>
          <button className="px-4 py-2 rounded-r-xl bg-neutral-50 hover:bg-neutral-200 transition">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DesktopMenu;
