import styled from "styled-components";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { useContext } from "react";
import { UserInfoContext } from "../../Contexts/userinfo";
import {BiLogOut} from "react-icons/bi"
import { useNavigate } from "react-router-dom";

export default function FixedPostMessageContainer() {
  const [showPostContainer, setShowPostContainer] = useState(true);
  const {userInfo, setUserInfo} = useContext(UserInfoContext)
  const navigate = useNavigate();
  
  function LogoutIcon() {
        localStorage.removeItem("username");
        setUserInfo({username:null})
        navigate("/");
  }

  return (
    <MainContainer>
      <TittleBar>
        <h1>CodeLeap Network</h1>
        {userInfo  ?<h1>{userInfo.username}</h1>:<h1>Enter a username to post message</h1>}
        <LogOutButton onClick={()=>LogoutIcon({navigate})}/>
      </TittleBar>
      {showPostContainer && (
        <PostMessageContainer show={showPostContainer}>
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
      )}
      {showPostContainer ? (
        <ShowPostButton onClick={() => setShowPostContainer(false)}  />
      ) : (
        <HidePostButton onClick={() => setShowPostContainer(true)} />
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position:fixed;
  left:0;
  top:0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 20px 40px rgba(118, 149, 236, 0.3);
  background-color:#FFFFFF;
`;

const TittleBar = styled.div`
  display: flex;
  align-items: center;
  padding: 27px 37px 27px 37px;
  background: #7695ec;
  width: 100%;
  margin-bottom: 30px;
  justify-content:space-between;

  h1 {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    font-style: normal;
    color: #ffffff;
  }
`;
const PostMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  width: 90%;
  height: 350px; 


  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
    width: 100%;
  }
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
    height: 74px;
    margin-top: 8px;
    margin-bottom: 20px;
    padding: 8px;
  }
`;

const CreateButton = styled.button`
  width: 120px;
  height: 32px;
  background: #7695ec;
  border-radius: 8px;
  border: none;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  font-style: normal;
`;

const ShowPostButton = styled(SlArrowUp)`
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;

  `;
const HidePostButton = styled(SlArrowDown)`
  margin-bottom: 20px;
  cursor: pointer;
  
`;

const LogOutButton = styled(BiLogOut)`
    cursor: pointer;
    color:#FFFFFF;
    font-size:25px;
`