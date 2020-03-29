// Utilidade de usar index.js :: sempre que importa uma pasta, este arquivo é procurado
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; // react-icons = Module instalado, fi = feather icons

import "./styles.css";

import logoImg from "../../assets/logo.svg"
import heroesImg from "../../assets/heroes.png"

function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logon" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    {/* Diferente da tag a, Link não recarrega a página */}
                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}

export default Logon; 