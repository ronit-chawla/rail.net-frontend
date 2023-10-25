import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Home.css';
import logo11 from '../Images/logo-1-1.png';
import medical from '../Images/medical.png';
import home from '../Images/home.png';
import profile from '../Images/profile.png';
import cart from '../Images/cart.png';
import search from '../Images/search.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector(state => state.train);
  return (
    <div>
      <div className='overlap' style={{ zIndex: '-2' }}>
        <img
          className='logo'
          alt='Logo'
          src={logo11}
          style={{ zIndex: '-1' }}
        />
      </div>

      {/* Navbar */}
      {state.ticketID && (
        <div className='nav'>
          <Link
            className='nav-link'
            to='/onboard-facilities'
          >
            <div className='nav-item'>
              Onboard Facilities
            </div>
          </Link>
          <Link className='nav-link' to='/medicals'>
            <div className='nav-item'>
              Medical Facilities
            </div>
          </Link>
          <Link className='nav-link' to='/kuli'>
            <div className='nav-item'>Kuli No. 1</div>
          </Link>
          <Link className='nav-link' to='/alerts'>
            <div className='nav-item'>Alerts</div>
          </Link>
        </div>
      )}
      <div className='bar'>
        <Link to='/medical-em'>
          <img
            src={medical}
            alt=''
            height={'50px'}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to=''>
          <img
            src={search}
            alt=''
            height={'50px'}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to='/'>
          <img
            src={home}
            alt=''
            height={'50px'}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to='/profile'>
          <img
            src={profile}
            alt=''
            height={'50px'}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to='/cart'>
          <img
            src={cart}
            alt=''
            height={'50px'}
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
