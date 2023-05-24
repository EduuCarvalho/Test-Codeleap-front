import styled from "styled-components"

export default function FixedPostMessageContainer() {

    return (
        <MainContainer>
            <TittleBar>
                <h1>CodeLeap Network</h1>
            </TittleBar>
            <PostMessageContainer>
                <h1>What's on your mind?</h1>
                <TittleInputContainer>
                    <h1>Tittle</h1>
                    <input placeholder="Hello World"></input>
                </TittleInputContainer>
                <ContentInputContainer>
                    <h1>Content</h1>
                    <input placeholder="Content here"></input>
                </ContentInputContainer>
                <CreateButton>Create</CreateButton>
            </PostMessageContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width:100%;
    height:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow: 0px 20px 40px rgba(118, 149, 236, 0.3);

`

const TittleBar = styled.div `
    display:flex;
    align-items:center;
    padding:27px 37px 27px 37px;
    background: #7695EC;
    width:100%;
    margin-bottom:30px;

     h1{
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        font-style: normal;
        color:#FFFFFF;
     }
`
const PostMessageContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:flex-end;
    padding:24px;
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 16px;
    width:90%;
    height:350px;

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        color: #000000;
        width:100%;
    }
`
const TittleInputContainer=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    input {
        border: 1px solid #777777;
        border-radius: 8px;
        background: #FFFFFF;
        height:32px;
        margin-top:8px;
        padding:8px;
    }
`
const ContentInputContainer=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    input {
        border: 1px solid #777777;
        border-radius: 8px;
        background: #FFFFFF;
        height:74px;
        margin-top:8px;
        margin-bottom:20px;
        padding:8px;
    }
`

const CreateButton = styled.button`
    width: 120px;
    height: 32px;
    background: #7695EC;
    border-radius: 8px;
    border:none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    font-style: normal;
`