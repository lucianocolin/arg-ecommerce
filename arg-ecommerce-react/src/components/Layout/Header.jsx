import React from "react";
import "../../css/Header.css";
//imgs
import logo from "../../imgs/logo.png";
import banderita from "../../imgs/banderita.png";
//react-bootstrap
import Offcanvas from "react-bootstrap/Offcanvas";
//hooks
import { useState } from "react";
//icons
import {
  FaBars,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
//react-router
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header">
        <FaBars onClick={handleShow} className="open-offcanvas-btn" />

        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={logo} alt="la tercera logo" className="offcanvas-logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <NavLink to="/" className={({ isActive }) => isActive ? 'offcanvas-body-active-link' : 'offcanvas-body-link'}>
              <h3>INICIO</h3>
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'offcanvas-body-active-link' : 'offcanvas-body-link'}>
              <h3>PRODUCTOS</h3>
            </NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? 'offcanvas-body-active-link' : 'offcanvas-body-link'}>
              <h3>Mi cuenta</h3>
            </NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? 'offcanvas-body-active-link' : 'offcanvas-body-link'}>
              <h3>Contacto</h3>
            </NavLink>
            <img src={banderita} alt="bandera argentina" />
            <div className="offcanvas-icons-container">
              <a
                href="https://www.instagram.com/lucianocolin/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="offcanvas-body-icon" />
              </a>
              <a
                href="https://www.facebook.com/L.C975/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="offcanvas-body-icon" />
              </a>
              <a
                href="https://twitter.com/lucianocolin_"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="offcanvas-body-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/luciano-colin-67476b180/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="offcanvas-body-icon" />
              </a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <img className="header-logo-mobile" src={logo} alt="la tercera logo" />
      </div>
    </>
  );
};

export default Header;
