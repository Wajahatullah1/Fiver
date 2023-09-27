import React from 'react'
import "./Featured.scss"
import Image from "../../images/img/search.png"
import ImageTow from "../../images/img/man.png"
  const Featured =() => {
  return (
 <div className="featured">
    <div className="container">
        <div className="main">
        <div className="left">
            <h1>Find the right freelance service, right away</h1>
            <div className="search">
                <div className="searchInput">
               <img src={Image} alt="" />
               <input type="text" placeholder='Try "Building mobile app"' />
                </div>
                <button>Search</button>
            </div>
            <div className="popular">
                <span>Populor:</span>
                <button className='btn'>Web Design</button>
                <button className='btn'>Wordpress</button>
                <button className='btn'>Logo Design</button>
                <button className='btn' >AI service</button>
               
            </div>
        </div>
         <div className="right">
            <img src={ImageTow} alt="" />
         </div>
    </div>
    </div>
 </div>
    )
}
export default Featured
