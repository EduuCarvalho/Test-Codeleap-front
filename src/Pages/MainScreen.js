import styled from "styled-components";
import FixedPostMessageContainer from "../Components/MainScreenPage/FixedPostMessageContainer";
import RenderMessagesContainer from "../Components/MainScreenPage/RenderMessagesContainer";
import { useEffect, useState } from "react";
import { getMessages } from "../Actions/actions";
import DeleteModal from "../Components/Modals/DeleteModal";
import PatchModal from "../Components/Modals/PatchModal";

export default function MainScreen() {

    const [messagesList, setMessagesList] = useState();
    const [loadingPost,setLoadingPost] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteMessageId,setDeleteMessageId] = useState();
    const [showPatchModal, setShowPatchModal] = useState(false)
    const [loadingPatch,setLoadingPatch] = useState(false);
    const [patchMessageId, setPatchMessageId] = useState();


    useEffect(() =>{

        getMessages()
        .then((res)=> {
            setMessagesList(res);
        })
        .catch((err)=> console.log(err))
    },[loadingPost,showDeleteModal])

   return(
        <MainPage> 
            <FixedPostMessageContainer loadingPost={loadingPost} setLoadingPost={setLoadingPost}/>
            <RenderMessagesContainer setPatchMessageId={setPatchMessageId} setDeleteMessageId={setDeleteMessageId} setShowDeleteModal={setShowDeleteModal} messagesList={messagesList} setShowPatchModal={setShowPatchModal}/>
            {showDeleteModal && <DeleteModal deleteMessageId={deleteMessageId} setShowDeleteModal={setShowDeleteModal}/>}
            {showPatchModal && <PatchModal patchMessageId={patchMessageId} loadingPatch={loadingPatch} setLoadingPatch={setLoadingPatch} setShowPatchModal={setShowPatchModal}/>}
        </MainPage>
    );
};

/* patchMessageId={patchMessageId} loadingPatch={loadingPatch} setLoadingPatch={setLoadingPatch} setShowPatchModal={setShowPatchModal */

const MainPage = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:70px;
`