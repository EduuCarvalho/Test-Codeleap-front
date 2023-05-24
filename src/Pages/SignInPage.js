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
           {showUserModal && <SignInModal/>} 
        </MainPage>
    );
}

const MainPage = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    align-items:center;
    justify-content:center;
    position: relative;
    background-color:${props => props.backgound ? "lightgray" : "#FFFFFF"};

`
const Logo = styled.img`
   height:15%;
  cursor: pointer; 
`