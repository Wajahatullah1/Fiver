import React, { useState } from 'react'
import './Gigs.scss'
import {gigs} from '../../data'
import GigCard from '../../components/gigcard/Gigcard'

const Gigs = () => {
  const [sort, setSort] = useState("sales")
  const [open, setOpen] = useState(false)

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className="gigs">
      <div className="container">

        <span className="breadcrumps">FIVERR , GRAPHICS & DESIGN </span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Fiverrs AI artists</p>

        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right-menu">
            <span className="sortby">SortBy:</span>
            <span className="sortType">{sort === "sales" ? "Best selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (<div className="rightmenu">
              {sort === "sales" ? (<span onClick={() => reSort("createdAT")}>Newest</span>
              ) : (<span onClick={() => reSort("sales")}>Best selling</span>
              )}
            </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig=>(
            <GigCard key ={gig.id} item= {gig}/>
         ) )}
        </div>
      </div>


    </div>
  )
}

export default Gigs
