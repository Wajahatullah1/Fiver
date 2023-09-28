import React, { useEffect, useState } from 'react';
import { Link, useLocation , useNavigate} from 'react-router-dom';
import profileImage from '../../../src/images/profile.jpeg';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate= useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);

    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  useEffect(() => {
    // Check if the current pathname is not the home page ("/") and redirect if needed
    if (pathname & '/') {
      navigate('/'); // Redirect to the home page
    }
  }, [pathname, navigate]);
  const currentUser = {
    id: 1,
    username: 'Wajahat',
    isSeller: true,
  };

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <Link className="logo" to='/'>
          <Link to="/" className="link" />
          <span className="fiverr">Fiverr</span>
          <span className="dot">.</span>
        </Link>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>join now</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Wajahat</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={profileImage} alt="profile" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        MyGigs
                      </Link>
                      <Link className="link" to="/add">
                        Add new gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Log out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className="menu">
            <div className="link" to="/">
              Graphics & Design
            </div>
            <div className="link" to="/">
              Video & Animation
            </div>
            <div className="link" to="/">
              Writing & translation
            </div>
            <Link className="link" to="/gigs">
              AI Services
            </Link>
            <div className="link" to="/">
              Digital Marketing
            </div>
            <div className="link" to="/">
              Music & Audio
            </div>
            <div className="link" to="/">
              Programing & Tech
            </div>
            <div className="link" to="/">
              Business
            </div>
            <div className="link" to="/">
              LifeStyle
            </div>
          </div>
          <hr/>
        </>
      )}
    </div>
  );
};

export default Navbar;
