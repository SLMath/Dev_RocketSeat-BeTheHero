// Utilidade de usar index.js :: sempre que importa uma pasta, este arquivo é procurado
import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; // react-icons = Module instalado, fi = feather icons

import "./styles.css";

import logoImg from "../../assets/logo.svg"

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiLogIn size={16} color="#E02041" />
                        Já tenho cadastro.
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                        {/* Tag: permite uso de CSS */}
                    </div>

                    <button className="button" type="submit">Cadastrar-se</button>
                </form>
            </div>
        </div>
    );
}