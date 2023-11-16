import React from "react";
import { Texto } from "../components/Texto";
import { Titulo } from "../components/Titulo";

function SobreNos() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Doação de Alimentos</title>
        <style>
          {`
          body {
            background-image: url("../src/assets/caixa-de-comida-2.jpg");
            background-size: cover;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-repeat: no-repeat;
          }
          .Center {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .cardSuperior {
            width: 80vw;
            background: rgba(255, 255, 255, 0.6);
            border: 1px solid #ccc;
            border-radius: 5px;
            display: center;
            justify-content: center;
            padding: 0.5em;
            margin-top: 0.5em;
            text-align: center;
          }`}
        </style>
      </head>
      <div className="Center">
        <div className="cardSuperior">
          <Titulo>Missão</Titulo>
          <Texto>Na SemFome-LTDA, a nossa missão é fazer a diferença no mundo ao combater o desperdício de alimentos e promover a sustentabilidade. Acreditamos que, através da tecnologia inovadora, podemos criar soluções que ajudam a reduzir o desperdício de alimentos em todo o mundo.</Texto>

          <Titulo>Quem Somos</Titulo>
          <Texto>Na SemFome-LTDA, somos um grupo diversificado de apaixonados por tecnologia e amantes da gastronomia. Combinamos a nossa paixão pela inovação com a nossa preocupação com o meio ambiente para desenvolver um sistema web revolucionário que aborda um dos problemas mais prementes da nossa era: o desperdício de alimentos.</Texto>

          <Titulo>O Nosso Compromisso</Titulo>
          <Texto>Estamos empenhados em enfrentar o desafio do desperdício de alimentos com uma abordagem única e eficaz. Através do nosso sistema web, conectamos estabelecimentos de alimentos, instituições de caridade e consumidores, tornando possível a redistribuição de alimentos excedentes, em vez de desperdiçá-los. Estamos empenhados em criar uma sociedade onde todos tenham acesso a alimentos de qualidade, ao mesmo tempo que reduzimos o impacto ambiental do desperdício de alimentos.</Texto>

          <Titulo>O Que Fazemos</Titulo>
          <Texto>No coração da SemFome-LTDA está o nosso sistema web inovador. Ele permite que restaurantes, supermercados e outros estabelecimentos alimentares identifiquem e partilhem excedentes de alimentos com organizações de caridade locais. Além disso, os consumidores podem utilizar a nossa aplicação para descobrir oportunidades para adquirir alimentos excedentes a preços acessíveis, ajudando assim a reduzir o desperdício.</Texto>

          <Titulo>Impacto Social e Ambiental</Titulo>
          <Texto>Acreditamos que o desperdício de alimentos é um problema que pode ser combatido com tecnologia, empatia e colaboração. Ao trabalhar em estreita colaboração com empresas e instituições de caridade, estamos a reduzir a fome e a minimizar o impacto ambiental negativo causado pelo desperdício de alimentos. A cada tonelada de alimentos que é redirecionada para o consumo humano em vez de ser desperdiçada, estamos a fazer a nossa parte na luta contra as mudanças climáticas e a promoção da justiça alimentar.</Texto>

          <Titulo>Junte-se a Nós</Titulo>
          <Texto>Acreditamos que cada pessoa pode fazer a diferença na luta contra o desperdício de alimentos. Junte-se a nós nesta missão e faça parte da mudança. Seja um restaurante que deseja partilhar excedentes, uma instituição de caridade que deseja receber doações, ou um consumidor que deseja fazer escolhas alimentares mais conscientes, a SemFome-LTDA está aqui para o apoiar.</Texto>

          <Titulo>A SemFome-LTDA está a construir um futuro mais sustentável, um prato de cada vez. Junte-se a nós nesta jornada!</Titulo>
        </div>
      </div>
    </html>

  )
}
export default React.memo(SobreNos);