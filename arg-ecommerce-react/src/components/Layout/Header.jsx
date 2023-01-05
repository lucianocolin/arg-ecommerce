import React from "react";
import "../../css/Header.css";
//imgs
import logo from "../../imgs/logo.png";
//react-bootstrap
/* import Button from "react-bootstrap/Button"; */
import Offcanvas from "react-bootstrap/Offcanvas";
//hooks
import { useState } from "react";
//icons
import {FaBars} from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FaBars
        onClick={handleShow}
        className="open-offcanvas-btn"
      />

      <Offcanvas show={show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="la tercera logo" className="offcanvas-logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <img className="header-logo-mobile" src={logo} alt="la tercera logo" />
      <div className="hero-image">
        <div className="hero-image-titles">
          <p>No es SÓLO ROPA DEPORTIVA</p>
          <p>INDUMENTARIA DE CAMPEONES</p>
        </div>
      </div>
    </>
  );
};

export default Header;
