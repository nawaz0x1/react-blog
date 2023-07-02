import LogoComponent from './logo';
import Menu from './menu';
const Navbar = () => {
  return (
    <nav className="">
      <div className="w-auto p-1 flex justify-between m-2 md:m-4 border-solid border-2 rounded-2xl shadow-md">
        <LogoComponent />
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
