import styled from "styled-components";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { useContext } from "react";
import { UserInfoContext } from "../../Redux/userinfo";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { postMessage } from "../../Actions/actions";

export default function FixedPostMessageContainer({loadingPost, setLoadingPost}) {
  const [showPostContainer, setShowPostContainer] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [disabledButton, setDisabledButton] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function LogoutIcon() {
    localStorage.removeItem("username");
    setUserInfo({ username: null });
    navigate("/");
  }

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

  function handleFormSubmit(e) {
    e.preventDefault();
  
    const data = {
      username: userInfo.username,
      title: title,
      content: content,
    };
    setLoadingPost(true)
    setDisabledButton(true)
    postMessage(data)
  .then((res) => {
    setLoadingPost(false)
    setContent("")
    setTitle("")
    console.log(res);
  })
  .catch((err) => {
    setLoadingPost(false)
    setContent("")
    setTitle("")
    console.log(err)
  });
}

  return (
    <MainContainer>
      <TittleBar>
        <h1>CodeLeap Network</h1>
        {userInfo ? (
          <h1>{userInfo.username}</h1>
        ) : (
          <h1>Enter a username to post message</h1>
        )}
        <LogOutButton onClick={() => LogoutIcon({ navigate })} />
      </TittleBar>
      {showPostContainer && (
        <PostMessageContainer
          show={showPostContainer}
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <h1>What's on your mind?</h1>
          <TittleInputContainer>
            <h1>Tittle</h1>
            <input placeholder="Hello World" onChange={handleTitle} value={title}></input>
          </TittleInputContainer>
          <ContentInputContainer>
            <h1>Content</h1>
            <textarea value={content}
              placeholder="Content here"
              onChange={handleContent}
            ></textarea>
          </ContentInputContainer>
          <CreateButton disabled={disabledButton} changeColor={disabledButton}>
            {loadingPost ? "loading..." : "Create"}
          </CreateButton>
        </PostMessageContainer>
      )}
      {showPostContainer ? (
        <ShowPostButton onClick={() => setShowPostContainer(false)} />
      ) : (
        <HidePostButton onClick={() => setShowPostContainer(true)} />
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 20px 40px rgba(118, 149, 236, 0.3);
  background-color: #ffffff;
`;

const TittleBar = styled.div`
  display: flex;
  align-items: center;
  padding: 27px 37px 27px 37px;
  background: #7695ec;
  width: 100%;
  margin-bottom: 30px;
  justify-content: space-between;

  h1 {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    font-style: normal;
    color: #ffffff;
  }
`;
const PostMessageContainer = styled.form`
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

const CreateButton = styled.button`
  width: 120px;
  height: 32px;
  background: ${(props) => (props.changeColor ? "gray" : "#7695EC")};
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
  color: #ffffff;
  font-size: 25px;
`;
