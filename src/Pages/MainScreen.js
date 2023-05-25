import styled from "styled-components";
import FixedPostMessageContainer from "../Components/MainScreenPage/FixedPostMessageContainer";
import RenderMessagesContainer from "../Components/MainScreenPage/RenderMessagesContainer";
import { useEffect, useState } from "react";
import { getMessages } from "../Actions/actions";

export default function MainScreen() {

    const [messagesList, setMessagesList] = useState();
    const [loadingPost,setLoadingPost] = useState(false);

    useEffect(() =>{

        getMessages()
        .then((res)=> {
            setMessagesList(res);
        })
        .catch((err)=> console.log(err))
    },[loadingPost])

   return(
        <MainPage> 
            <FixedPostMessageContainer loadingPost={loadingPost} setLoadingPost={setLoadingPost}/>
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