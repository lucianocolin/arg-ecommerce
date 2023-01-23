import React from "react";
//css
import "../css/Home.css";
//react-bootstrap
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div className="home-cards-general-container">
          <div className="home-jersey-card home-img-card">
            <p>
              LA <br />
              TERCERA <br />
              ESTÁ <br />
              AQUÍ
            </p>
            <div className="home-card-btn-container">
              <Button variant="light" className="home-card-vm-btn">
                VER MÁS
              </Button>
              <Button variant="light" className="home-card-buy-btn">
                COMPRAR
              </Button>
            </div>
          </div>
          <p>
            ¡Sigamos Festejando! Conseguí la camiseta de Argentina con la
            tercera estrella. No lo dudes más, este producto es muy deseado y
            podría agotarse rápido.
          </p>
        </div>

        <div className="home-cards-general-container">
          <div className="home-old-jersey-card home-img-card">
            <p>
              PARA LOS <br />
              NOSTÁLGICOS
            </p>
            <div className="home-card-btn-container">
              <Button variant="light" className="home-card-vm-btn">
                VER MÁS
              </Button>
              <Button variant="light" className="home-card-buy-btn">
                COMPRAR
              </Button>
            </div>
          </div>
          <p>
            Recordemos los momentos antes de llegar a la gloria máxima. ¡La
            camiseta del camino a la dorada!
          </p>
        </div>

        <div className="home-cards-general-container">
          <div className="home-boots-card home-img-card">
            <p>
              LOS DEL <br />
              MESSIAS
            </p>
            <div className="home-card-btn-container">
              <Button variant="light" className="home-card-vm-btn">
                VER MÁS
              </Button>
              <Button variant="light" className="home-card-buy-btn">
                COMPRAR
              </Button>
            </div>
          </div>
          <p>
            Qué decir de estos dorados... Los que vieron al más grande levantar
            la copa y lo ayudaron a llevarse a casa el Balón de Oro del Mundial
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
