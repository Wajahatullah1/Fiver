import React from 'react';
import "./Mygigs.scss";
import {Link} from 'react-router-dom'
const Mygigs = ()=> {
  return (
 <div className="mygigs">
   <div className="container">
      <div className="tittle">
         <h1>Gigs</h1>
         <Link className='btn-sm' to = '/add'>Add New Gig</Link>
      </div>
      <table>
         <tr>
            <th>Image</th>
            <th>Tittle</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Gig1</td>
         <td>88</td>
         <td>128</td>

         <td>
            <img src="/img/delete.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Gig2</td>
         <td>89</td>
         <td>122</td>

         <td>
            <img src="/img/delete.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Gig3</td>
         <td>84</td>
         <td>125</td>

         <td>
            <img src="/img/delete.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Gig4</td>
         <td>86</td>
         <td>128</td>

         <td>
            <img src="/img/delete.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Gig5</td>
         <td>88</td>
         <td>128</td>

         <td>
            <img src="/img/delete.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Gig6</td>
         <td>88</td>
         <td>128</td>

         <td>
            <img src="/img/delete.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Gig7</td>
         <td>88</td>
         <td>128</td>

         <td>
            <img src="/img/delete.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Gig8</td>
         <td>88</td>
         <td>128</td>

         <td>
            <img src="/img/delete.png" alt="" />
         </td>
         </tr>
      </table>
   </div>
 </div>
    )
}
export default Mygigs
