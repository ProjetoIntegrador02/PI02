import React, { useState, useEffect, ChangeEvent } from 'react';
import Axios from 'axios';
import { Row } from "../components/Row";

interface DonationData {
  Name?: string;
  Message: string;
}

function Home() {
  const [data, setData] = useState<DonationData[]>([]);

  useEffect(() => {
    Axios.get<DonationData[]>('http://localhost:3001/api/donations')
      .then((response) => setData(response.data));
  }, []);

  const [values, setValues] = useState<any>();

  const handleChangeValues = (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/api/donations", {
      Name: values.name,
      Email: values.email,
      TipoRequisicao: values.tiporequisicao,
      Message: values.message,
    }).then((response) => {
      console.log(response);
    });
  };

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
              }
            `}
        </style>
      </head>

      <div className='Center'>

        <div className='cardSuperior'>
          <h1>
            Sobre a Importância de Doar Alimentos
          </h1>
          <p>

            Doar alimentos desempenha um papel fundamental na construção de um mundo mais justo e na luta contra o desperdício. Quando compartilhamos o que temos em abundância com aqueles que enfrentam a fome, não apenas aliviamos o sofrimento, mas também reduzimos o desperdício de recursos preciosos.


            Cada doação é um ato de solidariedade que fortalece comunidades e promove a sustentabilidade. Ao combater o desperdício de alimentos, contribuímos para a preservação do meio ambiente e para a construção de um futuro mais compassivo e equitativo para todos.


            Cada pequeno gesto de doação é um passo na direção certa, mostrando como a empatia e a responsabilidade podem fazer do nosso mundo um lugar melhor.

          </p>
        </div>

        <form id="signup-form">
          <h2>Informações Pessoais</h2>
          <div className="input-box">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" onChange={handleChangeValues} required />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChangeValues} required />
          </div>
          <div className="input-box">
            <label htmlFor="tipoRequisicao">Eu estou:</label>
            <div className='input-box-radio'>
              <input type="radio" value="doando" id="tiporequisicao" name="tiporequisicao" onChange={handleChangeValues} required />
              <label>Doando</label>
            </div>
            <div className='input-box-radio'>
              <input type="radio" value="precisando" id="tiporequisicao" name="tiporequisicao" onChange={handleChangeValues} required />
              <label>Precisando</label>
            </div>
          </div>
          <h2>Mensagem</h2>
          <div className="input-box">
            <textarea id="message" name="message" rows={4} cols={35} onChange={handleChangeValues} placeholder="Digite aqui sua doação ou aquilo que você necessita"></textarea>
          </div>
          <div className="button-container">
            <button id="btnEnviar" className="btn" onClick={handleClickButton} style={{ backgroundColor: '#0074d9' }}>
              Enviar
            </button>
          </div>
        </form>

        <div className='cardSuperior'>
          <h2>Doações Disponíveis</h2>
          <div className='doacoes'>
          </div>
          <Row>
            {data.map((item, index) => (
              <div className='card' key={index}>
                <p> Nome do Doador: {item.Name ? item.Name : 'Anônimo'}
                  <br></br>Mensagem: {item.Message}
                </p>
              </div>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
