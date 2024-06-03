import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Lithium from "./Container/Lithium/Lithium";
import Home from "./Container/Home/Home";
import Inverter from "./Container/Inverter/Inverter";
import Solar from "./Container/Solar/Solar";
import Acid from "./Container/Acid/Acid";
import Tubular from "./Container/Tubular/Tubular";
import Products from "./Container/Products/Products";
import Contacts from "./Container/Contacts/Contacts";
import Help from "./Container/Help/Help";
import { Description } from "./Container/";
import Upgrade from "./Container/Upgrade/Upgrade";
import Repair from "./Container/Repair/Repair";
import Terms from "./Container/Terms/Terms";
import Cookies from "./Container/Cookies/Cookies";
import Privacy from "./Container/Privacy/Privacy";
import Signup from "./Container/Signup/Signup";
import Signin from "./Container/Signin/Signin";
import Cart from "./Container/Cart/Cart";
import Logo from "./Compnents/Logo";
import Notification from "./Compnents/Notificatiion";
import Enquiries from "./Container/Enquiries/Enquiries";
 import {Account} from './Container'
 import { Manage } from "./Compnents";

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasLogoBeenShown = sessionStorage.getItem("logoShown");

    if (!hasLogoBeenShown) {
      setTimeout(() => {
        setShowLogo(false);
        setShowHome(true);
        sessionStorage.setItem("logoShown", "true");
      }, 5000);
    } else {
      setShowLogo(false);
      setShowHome(true);
    }
  }, []);

  useEffect(() => {
    if (showHome) {
      const hasNotificationBeenShown = sessionStorage.getItem(
        "notificationShown"
      );

      if (!hasNotificationBeenShown) {
        const notificationTimer = setTimeout(() => {
          setShowNotification(true);
          sessionStorage.setItem("notificationShown", "true");
        }, 10000); // Show notification 10 seconds after showing home page

        return () => clearTimeout(notificationTimer);
      }
    }
  }, [showHome]);

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  if (showLogo) {
    return <Logo />;
  }

  return (
    <div className="App">
      <Routes>
        {showHome && <Route path="/" element={<Home />} />}
        <Route path="/description/:itemId" element={<Description />} />
        <Route path="/Lithium" element={<Lithium />} />
        <Route path="/Inverter" element={<Inverter />} />
        <Route path="/Acid" element={<Acid />} />
        <Route path="/Solar" element={<Solar />} />
        <Route path="/Tubular" element={<Tubular />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Upgrade" element={<Upgrade />} />
        <Route path="/Repair" element={<Repair />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Enquiries" element={<Enquiries />} />
       <Route path="/Account" element={<Account />} />
        <Route path="/Manage" element={<Manage />} />
      </Routes>
      {showNotification && (
        <Notification onClose={handleNotificationClose} />
      )}
    </div>
  );
}

export default App;
