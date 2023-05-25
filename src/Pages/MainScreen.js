import styled from "styled-components";
import FixedPostMessageContainer from "../Components/MainScreenPage/FixedPostMessageContainer";
import RenderMessagesContainer from "../Components/MainScreenPage/RenderMessagesContainer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainScreen() {

    const [messagesList, setMessagesList] = useState();

    useEffect(() =>{

        axios.get("https://dev.codeleap.co.uk/careers/")
        .then((res)=> {
            setMessagesList(res.data);
        })
        .catch((err)=> console.log(err))

    },[])

   return(
        <MainPage> 
            <FixedPostMessageContainer/>
            <RenderMessagesContainer messagesList={messagesList}/>
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