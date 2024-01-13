import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const LoginContainer = styled.div`
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  margin: 0 15px;
`;

export const FormContainer = styled.form`
  padding: 30px 20px;
`;

export const LoginButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 10px 0;
  border-radius: 4px;
  background: #176b87;
  color: #fff;
  font-size: 15px;
  &:active{
    transform: scale(0.99);
  }
`;

export const TitleContainer = styled.div`
  background: #176b87;
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 8px 0 0;
`;

export const Title = styled.h1`
  color: #fff;
  border-bottom: 1px solid #fff;
  margin-top: 40px;
`;
