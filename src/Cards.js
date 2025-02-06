// src/Cards.js
import React from 'react';
import './styles.css';
// import { cardData, fullCardData } from './utils';
import { cardData } from './utils';
import ChatbotWelcome from './ChatbotWelcome';


const Card = ({ img, link, title, description }) => {
  return (
    <div className={"card"}>
      <div className="card-img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="card-body">
        <span className="bg"></span>
        <span className="bg"></span>
        <span className="bg"></span>
        <a href={link} target="_blank" className="content" rel="noopener noreferrer">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </a>
      </div>
    </div>
  );
};


// const CardFull = ({ img, link, title, description }) => {
//   return (
//     <div className={"cardFull"}>
//       <div className="card-img" style={{ backgroundImage: `url(${img})` }}></div>
//       <div className="card-body">
//         <span className="bg"></span>
//         <span className="bg"></span>
//         <span className="bg"></span>
//         <a href={link} target="_blank" className="content" rel="noopener noreferrer">
//           <h2 className="title">{title}</h2>
//           <p className="description">{description}</p>
//         </a>
//       </div>
//     </div>
//   );
// };

const Cards = () => {
  return (
    <div className="cardsContainer">

      <div className="aboutUsContainer">
        <div className="aboutUsImg">

        </div>

        <div className="aboutUsTxt">
          <h3>Bienvenido al <span>Ecosistema Digital</span> de Planeación</h3>
          <p>Tu punto de acceso a la información estratégica del <span>Estado de Hidalgo</span></p>

          <p>Aquí encontrarás un conjunto de herramientas, datos y plataformas diseñadas para facilitar el acceso a información clave sobre el desarrollo y planeación del Estado de Hidalgo. Nuestro objetivo es brindarte una experiencia digital ágil y organizada para que encuentres lo que necesitas en un solo lugar.</p>
        </div>
      </div>

      {/* <div className="card-container">
        <CardFull
          img={fullCardData.img}
          link={fullCardData.link}
          title={fullCardData.title}
          description={fullCardData.description}
          fullWidth={true}
        />
      </div> */}
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            link={card.link}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <ChatbotWelcome />
    </div>
  );
};

export default Cards;
