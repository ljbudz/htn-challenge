import React, {useState} from 'react';
import styled from 'styled-components';

const FormBox = styled.form`
  height: 380px;
  width: 500px;
  background-color: #183249;
  padding: 0;
  outline: none;
  border-radius: 30px;
  border: 2px solid #efaba0;
  @media (max-width: 500px) {
    height: auto;
    width: 95%;
    margin: 0 auto;
    padding: 5px;
  };
`;

const TextInput = styled.input`
  height: 24px;
  padding: 5px 10px;
  outline: none;
  border: none;
  border-radius: 12px;
`;

const SubmitBtn = styled.button`
  height: 26px;
  width: 150px;
  background-color: #efaba0;
  border-radius: 13px;
  color: #183249;
  align-self: center;
  border: none;
  outline: none;
  margin: 10px 0;
  &:hover {
    cursor: pointer;
  }
`;

const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Label = styled.h1`
  color: white;
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 38px;
  @media(max-width: 500px) {
    font-size: 24px;
  }
`;

const FAKE_EMAIL = "htn2021@gmail.com";
const FAKE_PASSWORD = "helloworld";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(email === FAKE_EMAIL && password === FAKE_PASSWORD) {
      props.onAuthenticate();
    } else {
      alert("Incorrect email or password!");
      setPassword("");
    }
  };

  return (
    <FormBox onSubmit={handleFormSubmit}>
      <FormWrapper>
        <Title>Log in to Hack the North!</Title>
        <InputWrapper>
          <Label>Email:</Label>
          <TextInput type="email" value={email} onChange={handleEmailChange} required />
          <Label>Password: </Label>
          <TextInput type="password" value={password} onChange={handlePasswordChange} required />
        </InputWrapper>
        <SubmitBtn>Submit</SubmitBtn>
      </FormWrapper>
    </FormBox>
  );
};

export default LoginForm;