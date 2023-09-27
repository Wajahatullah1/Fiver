import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Home from '../src/pages/home/Home';
import Add from '../src/pages/add/Add';
import Gig from '../src/pages/gig/Gig';
import Gigs from '../src/pages/gigs/Gigs';
import Message from '../src/pages/message/Message';
import Messages from '../src/pages/messages/Messages';
import Mygigs from '../src/pages/mygigs/Mygigs';
import Order from '../src/pages/orders/Order';
import Registor from '../src/pages/registor/Registor';
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
       
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/gig",
          element: <Gig />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/message",
          element: <Message />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/mygigs",
          element: <Mygigs />
        },
        {
          path: "/orders",
          element: <Order />
        },
        {
          path: "/resgistor",
          element: <Registor />
        },
      
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
