import styled from 'styled-components';
import logo from './assets/logo.png';
import perfil from './assets/perfil.png';

import React from 'react';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`;

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`;

const LinkStyled = styled.a`
    color: var(--blue-dark);
    font-weight: 700;
`;

function Header() {
    return (
        <HeaderStyled>
            <img src={logo} alt="Logo da empresa" />
            <ContainerStyled>
                <img src={perfil} alt="Perfil usuário" />
                <LinkStyled href="#">Logoff</LinkStyled>
            </ContainerStyled>
        </HeaderStyled>
    )
}

export default Header;