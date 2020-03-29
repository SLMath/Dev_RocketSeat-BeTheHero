import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'; // react-icons = Module instalado, fi = feather icons

import "./styles.css";

import logoImg from "../../assets/logo.svg"
import heroesImg from "../../assets/heroes.png"

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logon" />
                <span>Bem vinda, _ONG_name_!</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>_CASE_</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>_DESCRIPTION_</p>

                    <strong>VALOR:</strong>
                    <p>_VALUE_</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>_CASE_</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>_DESCRIPTION_</p>

                    <strong>VALOR:</strong>
                    <p>_VALUE_</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>_CASE_</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>_DESCRIPTION_</p>

                    <strong>VALOR:</strong>
                    <p>_VALUE_</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>_CASE_</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>_DESCRIPTION_</p>

                    <strong>VALOR:</strong>
                    <p>_VALUE_</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}