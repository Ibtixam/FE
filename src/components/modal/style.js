import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #444;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  opacity: 0.8;
`;

export const Title = styled.h2`
  font-size: 19px;
  font-weight: 500;
  margin: 10px 0;
  color: #445;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5px 20px;
  padding: 0 20px;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 3px;
  border: 1px solid #dadada;
  padding: 5px 10px;
`;

export const Label = styled.label`
  font-size: 13px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 12px;
  border-top: 1px solid #dadada;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;

export const CancelButton = styled.button`
  border-radius: 20px;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #e6e6e6;
  color: #444;
`;

export const SaveButton = styled.button`
  border-radius: 20px;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: #fff;
  background: #176b87;
`;
