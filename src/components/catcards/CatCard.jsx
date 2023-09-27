import React from 'react';
import './CatCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



export const CatCard = ({ item }) => {
  return (
    <Link to="/cards?cat=design">
      <div className="slider">
        <img src={item.img} alt="" />
        <span className='title'>{item.title}</span>
        <span className='desc'>{item.desc}</span>
      </div>
    </Link>
  );
};

CatCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};


export default CatCard
