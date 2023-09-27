import React from 'react';
import "./Order.scss";
import {Link} from 'react-router-dom'
const Order = ()=> {
  const currentUser = {
    id: 1,
    username: 'Wajahat',
    isSeller: true,
  };
  return (
 <div className="order">
   <div className="container">
      <div className="tittle">
         <h1>Orders</h1>
         <Link className='btn-sm' to = '/add'>Add New Gig</Link>
      </div>
      <table>
         <tr>
            <th>Image</th>
            <th>Tittle</th>
            <th>Price</th>
            <th>{currentUser?.isSeller? "Buyer": "Seller"}</th>
            <th>Contact</th>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Clothing-barters</td>
         <td>88</td>
         <td>Wajahat</td>

         <td>
            <img src="/img/message.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Clothing-barters</td>
         <td>89</td>
         <td>Tayyab</td>

         <td>
         <img src="/img/message.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Clothing-barters</td>
         <td>84</td>
         <td>Anas</td>

         <td>
         <img src="/img/message.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Clothing-barters</td>
         <td>86</td>
         <td>Ali</td>

         <td>
         <img src="/img/message.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Clothing-barters</td>
         <td>88</td>
         <td>Abuzar</td>

         <td>
         <img src="/img/message.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Clothing-barters</td>
         <td>88</td>
         <td>Ajwad</td>

         <td>
         <img src="/img/message.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Clothing-barters</td>
         <td>88</td>
         <td>Majid</td>

         <td>
         <img src="/img/message.png" alt="" />
         </td>
         </tr>
         <tr>
         <td>
            <img src="/img/mygig.jpg" alt="" />
         </td>
         <td>Clothing-barters</td>
         <td>88</td>
         <td>Awais</td>

         <td>
         <img src="/img/message.png" alt="" />
         </td>
         </tr>
      </table>
   </div>
 </div>
    )
}
export default Order
