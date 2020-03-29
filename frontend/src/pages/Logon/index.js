// Utilidade de usar index.js :: sempre que importa uma pasta, este arquivo é procurado
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; // react-icons = Module instalado, fi = feather icons

import api from '../../services/api';

import "./styles.css";

import logoImg from "../../assets/logo.svg"
import heroesImg from "../../assets/heroes.png"

function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function HandleLogin(e) {
        e.preventDefault();

        try {
            const res = await api.post('session', { id });

            localStorage.setItem("ONG_ID", id);
            localStorage.setItem("ONG_Name", res.data.name);

            history.push('/profile');

        } catch (err) {
            alert('Falha no login. Tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logon" />

                <form onSubmit={HandleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder="sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    {/* Diferente da tag a, Link não recarrega a página */}
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}

export default Logon; 