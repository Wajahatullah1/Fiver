import React from 'react';
import "./Messages.scss";
const Messages = ()=> {
 
  const message="hey i am zubaair i need some help to find the right profucts"
  return (
 <div className="messages">
   <div className="container">
      <div className="tittle">
         <h1>Messages</h1>
      </div>
      <table>
         <tr>
            <th>Buyer</th>
            <th>Last message</th>
            <th>Date</th>
            <th>Action</th>
        
         </tr>
         <tr>
         <td>Wajahat</td>
         <td>{message}</td>
         <td>1 day ago</td>
         <td>
          <button>Mark as read</button>
         </td>

         </tr>
         <tr>
         <td>Wajahat</td>
         <td>{message}</td>
         <td>1 day ago</td>
         <td>
          <button>Mark as read</button>
         </td>

         </tr>
         <tr>
         <td>Wajahat</td>
         <td>{message}</td>
         <td>1 day ago</td>
         <td>
          <button>Mark as read</button>
         </td>

         </tr>
         <tr>
         <td>Wajahat</td>
         <td>{message}</td>
         <td>1 day ago</td>
         <td>
          <button>Mark as read</button>
         </td>

         </tr>
         <tr>
         <td>Wajahat</td>
         <td>{message}</td>
         <td>1 day ago</td>
         <td>
          <button>Mark as read</button>
         </td>

         </tr>
         <tr>
         <td>Wajahat</td>
         <td>{message}</td>
         <td>1 day ago</td>
         <td>
          <button>Mark as read</button>
         </td>

         </tr>
         <tr>
         <td>Wajahat</td>
         <td>{message}</td>
         <td>1 day ago</td>
         <td>
         <button>Mark as read</button>
         </td>

         </tr>
         <tr>
         <td>Wajahat</td>
         <td>{message}</td>
         <td>1 day ago</td>
         <td>
          <button>Mark as read</button>
         </td>

         </tr>
      </table>
   </div>
 </div>
    )
}
export default Messages
