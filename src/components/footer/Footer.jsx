import React from 'react'
import './Footer.scss'
 const Footer = () => {
  return (
   <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span> Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programing & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>LifeStyle</span>
            <span>potography</span>
            <span>SitMap</span>
         
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Careers</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
         
          </div>
           <div className="item">
            <h2>Support and Education</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
            <span>Fiverr Guides</span>
            <span>Fiverr Workspace</span>
           </div>
           <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community Hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
           </div>
           <div className="item">
            <h2>Business Solutions</h2>
            <span>About Business Solutions</span>
            <span>Fiverr Pro</span>
            <span>Fiverr Certified</span>
            <span>Fiverr Enterprise</span>
            <span>ClearVoice</span>
            <span>Working Not Working</span>
           </div>
        </div>

    
        <hr/>

        <div className="bottom">
          <div className="left">
            <h2>Fiverr</h2>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="./img/twitter.png" alt="" />
              <img src="img/facebook.png" alt="" />
              <img src="img/linkedin.png" alt="" />
              <img src="img/pinterest.png" alt="" />
              <img src="img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="./img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="./img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <div className="link">
              <img src="./img/accessibility.png" alt="" />
              
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}
export default Footer
