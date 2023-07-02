import { useState } from 'react';
import menuIcon from '../../assets/menuIcon.png';
import MobileMenu from './mobileMenu';
const MobileMenuButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div
        className="md:hidden pr-2 pt-1 hover:shadow-inner hover:bg-slate-50 rounded-xl"
        onClick={clickHandler}
      >
        <img className="w-8 h-auto" src={menuIcon} alt="Menu Button" />
      </div>
      {isClicked && <MobileMenu clickHandler={clickHandler} />}
    </>
  );
};

export default MobileMenuButton;
