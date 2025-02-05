// src/Home.js
import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <section className="home">
      <div className="logotipo">
        <img src={`${process.env.PUBLIC_URL}/img/logotipo.png`} alt="Logo de la Unidad Planeación" />
      </div>

      <div className="home">
        <div className="homeText">
          <img src={`${process.env.PUBLIC_URL}/img/nombre.png`} alt="Logo de Biblioteca Digital de Planeación" />
        </div>

        <div className="homeInfe">
          <img src={`${process.env.PUBLIC_URL}/img/homeInferior.png`} alt="Logo de Biblioteca Digital de Planeación" />
        </div>

        <div className="logoImg">
          <img src={`${process.env.PUBLIC_URL}/img/logoImg.png`} alt="Logo de Biblioteca Digital de Planeación" />
        </div>

        
      </div>
    </section>
  );
};

export default Home;
