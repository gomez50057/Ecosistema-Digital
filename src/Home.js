// src/Home.js
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const logoImgRef = useRef(null);

  useEffect(() => {

    gsap.to(logoImgRef.current, {
      x: "-35vw",
      y: "85vh",
      scale: 0.45,
      duration: 4,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: logoImgRef.current, // Elemento que dispara la animación
        start: 'Top 2%',          // Cuando el tope del elemento alcanza el centro del viewport
        end: '+=1000',                // La cantidad de scroll (en píxeles) que dura la animación (puedes ajustar este valor)
        scrub: true,                 // Sincroniza la animación con el scroll, haciendo que se reproduzca y se revierta al hacer scroll hacia arriba
        markers: true,               // Muestra marcadores para depuración (quita en producción)
      }
    });
  }, []);

  return (
    <section className="home">
      <div className="logotipo">
        <img src={`${process.env.PUBLIC_URL}/img/logotipo.png`} alt="Logo de la Unidad Planeación" />
      </div>

      <div className="home">
        <div className="homeText">
          <img src={`${process.env.PUBLIC_URL}/img/nombre.png`} alt="Logo de Biblioteca Digital de Planeación" />
        </div>

        <div className="logoImg" ref={logoImgRef}>
          <img src={`${process.env.PUBLIC_URL}/img/logoImg.png`} alt="Logo de Biblioteca Digital de Planeación" />
        </div>

        <div className="homeInfe">
          <img src={`${process.env.PUBLIC_URL}/img/homeInferior.png`} alt="Logo de Biblioteca Digital de Planeación" />
        </div>
      </div>
    </section>
  );
};

export default Home;
