import { Link } from 'react-router-dom';

const LogoComponent = () => {
  return (
    <div className="m-1">
      <span className="text-2xl font-bold">
        <Link to={'/'}>React Blog</Link>
      </span>
    </div>
  );
};

export default LogoComponent;
