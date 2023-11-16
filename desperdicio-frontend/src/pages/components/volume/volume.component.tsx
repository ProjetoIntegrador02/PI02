import volume1 from "../../../assets/volume1.png";
import volume2 from "../../../assets/volume2.png";
import volume3 from "../../../assets/volume3.png";
import {VolumeItens} from './volume.style';

export function Volume({ setActiveStep }: {setActiveStep: React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <>
      <h1 style={{ fontSize: 48, textAlign: "center" }}>Volume de Itens</h1>
      <p style={{ fontSize: 18, textAlign: "center" }}>
        Qual o volume de itens existe para a retirada?
      </p>

      <VolumeItens>
        <li onClick={() => setActiveStep(2)}>
          <p>Quantidade 1 (até 5 itens)</p>
          <img src={volume1} alt="volume 1" />
        </li>

        <li onClick={() => setActiveStep(2)}>
          <p>Quantidade 2 (de 6 a 10 itens)</p>
          <img src={volume2} alt="volume 2" />
        </li>

        <li onClick={() => setActiveStep(2)}>
          <p>Quantidade 3 (Mais de 10 itens)</p>
          <img src={volume3} alt="volume 3" />
        </li>
      </VolumeItens>
    </>
  );
}
