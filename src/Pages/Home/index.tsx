import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import ButtonDefault from '../../core/components/Button/Button';

const Home = () => {
  return(
      <div className="home-container">
          <div className="home-content">
              <div className="col-6">
                  <h1 className="home-title"> 
                  Desafio do Capítulo 3,<br/> Bootcamp DevSuperior
                  </h1>
                  <h3 className="home-subtitle">
                  Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /> 
                  Favor observar as instruções passadas no capítulo sobre a<br />
                  elaboração deste projeto.<br />
                  Este design foi adaptado a partir de Ant Design System for Figma, de<br /> 
                  Mateusz Wierzbicki: <span className="home-email"> antforfigma@gmail.com</span>
                  </h3>
                  <Link to="/searchs">
                    <ButtonDefault text="Começar" />     
                 </Link> 
              </div>
          </div>

      </div>
  )
}

export default Home;