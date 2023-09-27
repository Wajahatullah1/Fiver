import React from 'react';
import Trustedby from '../../components/trusted /Trustedby'; // Remove the space before /Trustedby
import Featured from '../../components/featured/Featured';
import Slider from '../../components/slide/Slide';
import CatCard from '../../components/catcards/CatCard';
import Project from '../../components/prejects/Projects';
import { cards } from '../../data';
import {projects} from '../../data';
import './Home.scss';

const Home = () => {

  return (
    <div className="home">
      <Featured />
      <Trustedby />
      <Slider slidesToShow={5} arrowScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slider>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="tittle">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            <div className="tittle">
              <img src="./img/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            <div className="tittle">
              <img src="./img/check.png" alt="" />
              Pay when you are happy
            </div>
            <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            <div className="tittle">
              <img src="./img/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiverr business</h1>
            <h2>Advanced solutions and professional talent for businesses</h2>
            <div className="tittle">
              <img src="./img/check.png" alt="" />
              Fiverr Pro
            </div>
            <p>Access top freelancers and professional business tools for any project.</p>
            <div className="tittle">
              <img src="./img/check.png" alt="" />
              Fiverr Certified
            </div>
            <p>Build your own branded marketplace of certified experts</p>
            <div className="tittle">
              <img src="./img/check.png" alt="" />
              Fiverr Enterprise
            </div>
                      
                <p>Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution.</p>
          <button>Learn more</button>
            
          </div>
          <div className="iem">
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt=""  />
              </div>
        </div>
      </div>
      <Slider slidesToShow={5} arrowScroll={5}>
        {projects.map((card) => (
          <Project item={card} key={card.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
