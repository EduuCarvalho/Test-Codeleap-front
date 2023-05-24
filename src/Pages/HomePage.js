import styled from "styled-components";
import logo from "../Assets/Images/codeleap_logo_black 1.png"

export default function HomePage () {


    

    return (
        <MainPage>
            <Logo src={logo}/>
        </MainPage>
    );
}

const MainPage = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    align-items:center;
    justify-content:center;

`
const Logo = styled.img`
   height:15%;
    
`