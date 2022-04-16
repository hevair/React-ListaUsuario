import Axios from "axios";
import React, { useEffect, useState } from "react";
import './styles.css'

type Usuario = {
	Id : number
    nome: string,
    email: string,
    sexo: string,
    rg : string,
    cpf: string,
    nomeMae: string,
    situacaoCadastro: string,
    dataCadastro: string,
    contato: null,
    enderecosEntrega: null,
    departamentos: null

}

export function ProfileCard() {
    const urlBase = 'https://localhost:5001/api/v1/Usuario'
    const [userData, setUserData] = useState<Usuario[]>([])
    useEffect(function () {
        Axios.get(urlBase)
            .then(data => setUserData(data.data))
    }, [])

    return (
        <div className="card">
            {userData.map( info => (
                <div className="container">
                    <header>
                        <img src="https://avatars.githubusercontent.com/u/15059093?v=4" alt="Photo-User" />
                        <div className="user-info">
                            <h2>{info.nome}</h2>
                            <span id="city">Brasil, São Paulo</span>
                        </div>
                    </header>
                    <main className="content">
                        <h3 >Informação do Usuario</h3>
                        <div className="text-user">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere.
                        </div>
                        <div className="contact">
                            <span id="email">{info.email}</span>
                            <span id="tel">11-99999-9999</span>
                        </div>
                    </main>
                </div>
            ))}
        </div>
    )
}