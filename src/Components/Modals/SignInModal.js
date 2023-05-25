import { useEffect, useState } from "react";
import styled from "styled-components";
import { UserInfoContext } from "../../Contexts/userinfo";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignInModal() {

    const {setUserInfo, userInfo} = React.useContext(UserInfoContext)
    const [disabledButton, setDisabledButton] = useState(true);
    const [userName, setUserName] = useState("");
    let navigate = useNavigate();

function handleUserName(event){
    const {username,value} = event.target;
    setUserName(value);
    setDisabledButton(value === "");
   
}
useEffect(() => {
    if (userInfo.username) {
      navigate("/home");
    }
  }, []);

function logIn(e, username){
    e.preventDefault();
    setUserInfo({username:username})
    localStorage.setItem("username", username)
    navigate("/home")
}
  return(
    <SignInContaier onSubmit={(e) => logIn(e,userName)}>
        <h1>Welcome to CodeLeap network!</h1>
       <UserNameInputContiner>
            <h1>Please enter you username</h1>
            <Input placeholder="username" onChange={handleUserName}/>
       </UserNameInputContiner>
        <ButtonContainer disabled={disabledButton}>
            <button type="submit">ENTER</button>
        </ButtonContainer>
    </SignInContaier>
  );
}

const SignInContaier = styled.form`
    z-index:9999;
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    background-color:#FFFFFF;
    border-radius: 16px;
    border: 1px solid #CCCCCC;
    padding:24px;
    width:500px;
    height:205px;
   
    

        h1 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 26px;
            color: #000000;
            margin-bottom:24px;;        }
`
const UserNameInputContiner = styled.div`
    display:flex;
    flex-direction:column;

        h1 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
            margin-bottom:8px;
        }
`
const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #777777;
    border-radius: 8px;
    padding: 8px;
    font-size: 14px;
    box-sizing: border-box;
`;

const ButtonContainer=styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
    margin-top:16px;

    button {
        background:${props => props.disabled ? "gray" : "#7695EC"} ;
        border-radius: 8px;
        border:none;
        width:111px;
        height:32px;
        color: #FFFFFF;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
    }
` 

/* background: #7695EC; */