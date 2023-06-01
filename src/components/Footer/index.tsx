import styled from 'styled-components';
import facebook from './assets/facebook.png';
import whatsapp from './assets/whatsapp.png';
import instagram from './assets/instagram.png';
import google from './assets/google.png';

const FooterStyled = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--blue-dark);
    text-align: center;
`;

const ListStyled = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`;

const ItemStyled = styled.li`
    list-style: none;
`;

function Footer() {
    return(
        <FooterStyled>
            <ListStyled>
                <ItemStyled>
                    <a href="#"> <img src={facebook} alt="facebook icon" /></a>
                </ItemStyled>
                <ItemStyled>
                    <a href="#"> <img src={whatsapp} alt="facebook icon" /></a>
                </ItemStyled>
                <ItemStyled>
                    <a href="#"> <img src={instagram} alt="facebook icon" /></a>
                </ItemStyled>
                <ItemStyled>
                    <a href="#"> <img src={google} alt="facebook icon" /></a>
                </ItemStyled>
            </ListStyled>
            <p>2023 - created by Ricardo Cardoso </p>
        </FooterStyled>
    )
}

export default Footer;