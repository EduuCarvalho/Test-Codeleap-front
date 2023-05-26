import { useState } from "react";
import styled from "styled-components";
import { updateMessage } from "../../Actions/actions";

export default function PatchModal({patchMessageId, loadingPatch, setLoadingPatch, setShowPatchModal}) {
  const [disabledButton, setDisabledButton] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
console.log(patchMessageId,"ID NO MODAL PATCH")
  function handleTitle(event) {
    const { value } = event.target;
    setTitle(value.trim());
    setDisabledButton(value.trim() === "" || content.trim() === "");
  }
  function handleContent(event) {
    const { value } = event.target;
    setContent(value.trim());
    setDisabledButton(title.trim() === "" || value.trim() === "");
  }

  function handleUpdate(e,id) {
    e.preventDefault();

    const data = {
      title: title,
      content: content,
    };
    setLoadingPatch(true)
    setDisabledButton(true);
    updateMessage(id,data)
      .then((res) => {
     setLoadingPatch(false); 
        setContent("");
        setTitle("");
      })
      .catch((err) => {
        setLoadingPatch(false); 
        setContent("");
        setTitle("");
      });
  }

  return (
    <ModalOverlay>
      <PatchContainer>
        <ModalTitle>Edit Item</ModalTitle>
        <TittleInputContainer>
          <h1>Tittle</h1>
          <input
            value={title}
            placeholder="Hello World"
            onChange={handleTitle}
          ></input>
        </TittleInputContainer>
        <ContentInputContainer>
          <h1>Content</h1>
          <textarea
            value={content}
            placeholder="Content here"
            onChange={handleContent}
          ></textarea>
        </ContentInputContainer>
        <ButtonsContainer>
          <CancelButton onClick={()=>setShowPatchModal(false)}>Cancel</CancelButton>
          <EditButton
            disabled={disabledButton}
            changeColor={disabledButton}
            onClick={(e)=> handleUpdate(e,patchMessageId)}
          >{loadingPatch? "loading..." : "Edit"}
            
          </EditButton>
        </ButtonsContainer>
      </PatchContainer>
    </ModalOverlay>
  );
}

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const PatchContainer = styled.div`
  position: fixed;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 600px;
  height: 334px;
  padding: 24px;
  border: 1px solid #999999;
  border-radius: 16px;
  background: #ffffff;

  @media screen and (max-width: 600px) {
    height: 350px;
    width: 300px;
  }
`;

const ModalTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  font-family: "Roboto";
`;

const TittleInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  input {
    border: 1px solid #777777;
    border-radius: 8px;
    background: #ffffff;
    height: 32px;
    margin-top: 8px;
    padding: 8px;
  }
`;

const ContentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  word-wrap: break-word;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  textarea {
    border: 1px solid #777777;
    border-radius: 8px;
    background: #ffffff;
    height: 74px;
    margin-top: 8px;
    margin-bottom: 20px;
    padding: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-family: "Roboto";
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  background: #ffffff;
  border-radius: 8px;
  border: none;
  width: 111px;
  height: 32px;
  color: #000000;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-right: 16px;
  border: 1px solid #999999;
  border-radius: 8px;
`;
const EditButton = styled.button`
  background: ${(props) => (props.changeColor ? "gray" : " #47B960")};
  border-radius: 8px;
  border: none;
  width: 111px;
  height: 32px;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;
