import React from 'react';
import './ToggleMenu.css'; 

const ToggleMenu = ({ menuOpen, setMenuOpen }) => {
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='p-2'>
      <input
        type="checkbox"
        id="checkbox"
        checked={menuOpen}
        onChange={handleToggle}
        style={{ display: 'none' }}
      />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>
  );
};

export default ToggleMenu;
