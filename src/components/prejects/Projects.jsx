import React from 'react';
import './Projects.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



export const Project = ({ item }) => {
  return (
    <Link to="/" className='link'>
      <div className="projectcards">
        <img src={item.img} alt="" />
         <div className="info">
            <img src={item.pp} alt="" />
             <div className="text">
                <h2>{item.cat}</h2>
                <span>{item.username}</span>
             </div>
         </div>
      </div>
    </Link>
  );
};

Project.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};


export default Project
