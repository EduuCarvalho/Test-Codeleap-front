import styled from "styled-components";

export default function RenderMessagesContainer() {

    return (
        <FeedMessagesContainer>
            <MessageContainer>
                <TittleBar>
                    <h1> TITULO DA MSG</h1>
                    <ActionButtons>
                        LALALA
                    </ActionButtons>
                </TittleBar>
                <TextContainer>
                    <PostInfo>
                        <h2>@VINII</h2>
                        <h2>40 ago</h2>
                    </PostInfo>
                    <MessageBox>
                                   ASDASDSADSADSADSADSADSADASDSAD                 
                    </MessageBox>
                </TextContainer>
            </MessageContainer>
        </FeedMessagesContainer>   
    );
}

const FeedMessagesContainer = styled.section `
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
    background-color:lightcoral;
    padding:24px 0px;
`
const MessageContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 16px;
    margin-bottom:24px;
`
const TittleBar = styled.div `
    display:flex;
    justify-content:space-between;
    padding:24px;
    align-items:center;
    width:100%;
    border-radius: 16px 16px 0px 0px;
    background: #7695EC;

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        color: #FFFFFF;   
    }
`
const ActionButtons = styled.div`
    display:flex;
    justify-content:space-between;

`
const TextContainer = styled.div `
    display:flex;
    flex-direction:column;
    padding:24px;
    width:100%;

`

const PostInfo = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    margin-bottom:16px;

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #777777;
        
    }
`
const MessageBox = styled.p`
    font-family: 'Roboto';
    width:100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`