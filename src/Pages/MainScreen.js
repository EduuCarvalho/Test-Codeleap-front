import styled from "styled-components";
import FixedPostMessageContainer from "../Components/MainScreenPage/FixedPostMessageContainer";
import RenderMessagesContainer from "../Components/MainScreenPage/RenderMessagesContainer";

export default function MainScreen() {

   return(
        <MainPage> 
            <FixedPostMessageContainer/>
            <RenderMessagesContainer/>
        

        </MainPage>
    );
};

const MainPage = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
`