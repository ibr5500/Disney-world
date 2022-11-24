import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaMicrophone } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';

function Navbar() {
  return (
    <nav>
      <div className="left">
        <Link to="/">
          <FaChevronLeft />
        </Link>
      </div>
      <div className="center">
        Disney world
      </div>
      <div className="right">
        <div className="mic">
          <FaMicrophone />
        </div>
        <div className="gear">
          <BsGearFill />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
