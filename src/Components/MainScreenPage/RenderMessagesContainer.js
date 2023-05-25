import styled from "styled-components";
import { TbTrashXFilled } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import moment from "moment";


export default function RenderMessagesContainer({ messagesList }) {

  function getTime(date) {
    const createdDatetime = date; // Data de criação da postagem
    const currentDatetime = moment(); // Tempo atual

    const duration = moment.duration(currentDatetime.diff(createdDatetime));
    const timeAgo = duration.humanize(); // Diferença de tempo em uma forma legível, como "há alguns segundos", "há 5 minutos", etc.

    return timeAgo + " ago"; // Exibe a diferença de tempo entre a data de criação e o tempo atual
  }
  console.log(messagesList);
  return (
    <FeedMessagesContainer>
      {messagesList ? (
        messagesList.results.map((msg) => {
          return (
            <MessageContainer key={msg.id}>
              <TittleBar>
                <h1> {msg.title}</h1>
                <ActionButtons>
                  <DeleteIcon />
                  <EditIcon />
                </ActionButtons>
              </TittleBar>
              <TextContainer>
                <PostInfo>
                  <h2> @{msg.username}</h2>
                  <h3>{getTime(msg.created_datetime)}</h3>
                </PostInfo>
                <MessageBox>{msg.content}</MessageBox>
              </TextContainer>
            </MessageContainer>
          );
        })
      ) : (
        <>LOADING</>
      )}
    </FeedMessagesContainer>
  );
}

const FeedMessagesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 24px 0px;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-bottom: 24px;
`;
const TittleBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
  width: 100%;
  border-radius: 16px 16px 0px 0px;
  background: #7695ec;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
  }
`;
const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
`;

const PostInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  color: #777777;
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
  h3 {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: right;
  }
`;
const MessageBox = styled.p`
  font-family: "Roboto";
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  word-wrap: break-word;
`;

const DeleteIcon = styled(TbTrashXFilled)`
  color: #ffffff;
  font-size: 23px;
`;

const EditIcon = styled(BiEdit)`
  color: #ffffff;
  font-size: 23px;
`;
