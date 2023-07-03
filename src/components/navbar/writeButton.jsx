import { Link } from 'react-router-dom';

const Write = () => {
  return (
    <Link to={'/write'}>
      <div className="m-1">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center p-2"
        >
          <span>✏ </span>
          <span className="hidden md:inline-block">Write</span>
        </button>
      </div>
    </Link>
  );
};

export default Write;
