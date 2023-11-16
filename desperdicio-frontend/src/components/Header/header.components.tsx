import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { Aligner } from "../Aligner";
import * as S from './header.style';

function Header() {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <Aligner>
        <S.AlignerHeader>
          <img src={Logo} style={{ cursor: 'pointer' }} onClick={() => navigate('/')} />
          <nav>
            <Link to="/">Página inicial</Link>

            <Link to="/ajude">Contribua com Alguém</Link>

            <Link to="/sobre-nos">Sobre nós</Link>

          </nav>
        </S.AlignerHeader>
      </Aligner>
    </S.Wrapper>
  );
}

export default React.memo(Header);
