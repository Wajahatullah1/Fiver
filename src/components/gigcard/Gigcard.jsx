import React from 'react';
import { Link } from 'react-router-dom';
import './Gigcard.scss'
import PropTypes from 'prop-types';

const Gigcard = ({ item }) => {
  return (
    <Link to="/gigs/123">
      <div className="gigcard">
        <img src={item.img} alt="" />
        <div className="info">
            <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.username}</span>
            </div>
        <p>{item.desc}</p>
        <div className="star">
            <img src="img/star.png" alt="" />
            <span>{item.star}</span>
        </div>
      
        <hr/>
        <div className="details">
            <img src="./img/heart.png" alt="" />
            <div className="price">
            <span>STARTING AT</span>
            <h2> {item.price}</h2>
            </div>
            </div>
        </div>
      </div>
    </Link>
  );
}
Gigcard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    star: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Gigcard;
