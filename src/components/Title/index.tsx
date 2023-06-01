import React from "react";
import styled from "styled-components";

import avaliation from './assets/avaliacao.png';
import consult from './assets/consulta.png';
import graphic from './assets/grafico.png';

interface Props {
    image?: String,
    children?: React.ReactNode
}

interface Images {
    avaliation: string,
    graphic: string,
    consult:string
}

const SpanStyled = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100px;
    height: 100px;
    background-image: ${Props => Props.image ? `url(${Props.image})` : 'none'};
`;

const TitleStyled = styled.h2`
    color: var(--blue-dark);
`;

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
`; 

function Title({image, children}: Props) {
    const ImageList: Images = {
        avaliation: avaliation,
        graphic: graphic,
        consult: consult
    }
    return(
        <ContainerStyled>
            {image && <SpanStyled image={ImageList[image as keyof Images]}/>}
            <TitleStyled>{children}</TitleStyled>
        </ContainerStyled>
    )
}

export default Title;