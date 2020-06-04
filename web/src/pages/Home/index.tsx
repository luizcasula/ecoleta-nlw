import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="" />
                </header>

                <main>
                    <h1>Seu markertplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficente.</p>

                    <a href="/cadastro">
                        <span><FiLogIn/></span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </a>
                </main>
            </div>
        </div>
    );
}

export default Home;
