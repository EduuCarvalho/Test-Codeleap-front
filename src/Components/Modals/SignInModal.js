import styled from "styled-components";

export default function SignInModal() {
  retrun(
    <SignInContaier>
        <h1>Welcome to CodeLeap network!</h1>
    </SignInContaier>
  );
}

const SignInContaier = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#FFFFFF;
    border-radius: 16px;
    border: 1px solid #CCCCCC;
    padding:24px;

        h1 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 26px;
            color: #000000;
        }
`