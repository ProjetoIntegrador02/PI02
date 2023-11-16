import React, { useState, useEffect, ChangeEvent } from 'react';
import Axios from 'axios';
import { Row } from "../components/Row";

interface DonationData {
  Name?: string;
  Email: string;
  Message: string;
}

function Home() {
  const [data, setData] = useState<DonationData[]>([]);

  useEffect(() => {
    Axios.get<DonationData[]>('http://localhost:3001/api/donations/ajude')
      .then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Doação de Alimentos</title>
        <style>
          {`
              body {
                background-image: url("../src/assets/caixa-de-comida-1.jpg");
                background-size: cover;
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                font-size: 16px;
                height: 100vh;
              }
              h1 {
                font-size: 24px;
                font-weight: bold;
              }
              #map {
                height: 250px;
                width: 100%;
                position: relative;
                bottom: 0;
              }
              #content {
                background: rgba(255, 255, 255, 0.8);
                padding: 20px;
                border-radius: 10px;
                margin: 20px;
                display: flex;
                justify-content: center;
              }
              #signup-form {
                width: 300px;
                margin: 20px;
                padding: 10px;
                background: rgba(255, 255, 255, 0.8);
                border: 1px solid #ccc;
                border-radius: 5px;
                display: center;
                justify-content: center;
              }
              .description {
                margin: 20px;
                color: #fff;
              }
              .eye-icon {
                cursor: pointer;
              }
              .btn {
                display: inline-block;
                margin: 10px;
                padding: 10px 20px;
                background: #0074d9;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
              .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                justify-content: center;
                align-items: center;
              }
              .modal-content {
                background: #fff;
                padding: 20px;
                border-radius: 5px;
              }
              .modal-close {
                float: right;
                cursor: pointer;
              }
              .input-box {
                margin: 10px 0;
                display: flex;
                flex-direction: column;
              }
              .input-box-radio {
                margin: 10px 0;
                display: flex;
                gap: 10px;
              }
              .button-container {
                text-align: center;
              }
              .btn {
                display: center;
              }
              .card {
                background-color: #E9CA5D;
                padding: 10px;
                min-height: 50px;
                border-radius: 20px;
              }
              .Center {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .cardSuperior {
                width: 90vw;
                background: rgba(255, 255, 255, 0.8);
                border: 1px solid #ccc;
                border-radius: 5px;
                display: center;
                justify-content: center;
                padding: 0.5em;
                margin-top: 0.5em;
                text-align: center;
              }
            `}
        </style>
      </head>

      <div className='Center'>

        <div className='cardSuperior'>
          <h1>
            Agradecimentos!
          </h1>
          <p>

            Gostaria de aproveitar a oportunidade para transmitir nossos sinceros agradecimentos pela sua iniciativa de doação à alguém que precisa. Como você sabe, iniciamos esse projeto para reunirmos o máximo de contribuições que nos ajudarão a nos aproximarmos da nossa meta de ajudarmos o próximo.

            <br /><br /><b>Mais uma vez, obrigado pela generosidade e pelo apoio!</b>

          </p>
        </div>


        <div className='cardSuperior'>
          <h2>Encontre Alguém para ajudar!</h2>
          <div className='doacoes'>
          </div>
          <Row>
            {data.map((item, index) => (
              <div className='card' key={index}>
                <p> Ajude o(a) : {item.Name ? item.Name : 'Anônimo'}
                  <br></br>Email: {item.Email}
                  <br></br>Mensagem: {item.Message}
                </p>
              </div>
            ))}
          </Row>
        </div>
      </div>
    </div >
  );
}

export default React.memo(Home);
