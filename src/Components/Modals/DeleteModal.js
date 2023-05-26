import styled from "styled-components";
import { deleteMessage } from "../../Actions/actions";
import Swal from 'sweetalert';

export default function DeleteModal({deleteMessageId,setShowDeleteModal}) {

  
  function handleDelete(id) {
 
    deleteMessage(id)
    .then(()=>{
        console.log("item deletado");
        setShowDeleteModal(false);
    })
.catch((err)=>{
    console.log("erro ao deletar")
    Swal({
      title: 'Error!',
      text: 'Something went wrong.',
      icon: 'error',
      button: 'OK',
    });
})
  }

  return (
    <ModalOverlay>
      <DeleteContainer>
        <ModalTitle>Are you sure you want to delete this item?</ModalTitle>
        <ButtonsContainer>
          <CancelButton onClick={()=>setShowDeleteModal(false)}>Cancel</CancelButton>
          <DeleteButton onClick={()=>handleDelete(deleteMessageId)}>Delete</DeleteButton>
        </ButtonsContainer>
      </DeleteContainer>
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

const DeleteContainer = styled.div`
  position: fixed;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 146px;
  padding: 24px;
  border: 1px solid #999999;
  border-radius: 16px;
  background: #ffffff;

  @media screen and (max-width: 580px) {
    height:200px;
    width:250px;
    
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
const DeleteButton = styled.button`
  background: red;
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
