import styled from "styled-components";
import logo from "../Assets/Images/codeleap_logo_black 1.png"
import SignInModal from "../Components/Modals/SignInModal";
import { useState } from "react";

export default function SiginInPage () {

    const [showUserModal, setShowUserModal] = useState(false);

    console.log(showUserModal)
    function showUsernameModal(){
        setShowUserModal(true);
    }

    return (
        <MainPage backgound={showUserModal} onClick={showUsernameModal}>
            <Logo src={logo}/>
            <h1>click to start...</h1>
           {showUserModal && <SignInModal/>} 
        </MainPage>
    );
}

const MainPage = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100vh;
    align-items:center;
    justify-content:center;
    position: relative;
    background-color:${props => props.backgound ? "lightgray" : "#FFFFFF"};

    h1{
        cursor: pointer;
        font-size:15px;
    }
`
const Logo = styled.img`
   height:15%;
  cursor: pointer; 
`