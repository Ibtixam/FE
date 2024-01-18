import {
  ModalContainer,
  Title,
  Input,
  Label,
  InputWrapper,
  Overlay,
  ButtonWrapper,
  CancelButton,
  SaveButton,
} from "./style";
import ReactDOM from "react-dom";
import React from "react";

interface ModalProps {
  visible?: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  props?: any;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Modal: React.FC<ModalProps> = ({ visible, onCancel, onConfirm }) => {
  return (
    <>
      {visible && (
        <>
          <Overlay onClick={onCancel} />
          <ModalContainer>
            <Title>Add Product</Title>
            <InputWrapper>
              <Label>Cash Payment Voucher: </Label>
              <Input />
            </InputWrapper>
            <InputWrapper>
              <Label>Salary Payment Voucher: </Label>
              <Input />
            </InputWrapper>
            <InputWrapper>
              <Label>GTN Number: </Label>
              <Input />
            </InputWrapper>
            <ButtonWrapper>
              <CancelButton onClick={onCancel}>Cancel</CancelButton>
              <SaveButton onClick={onConfirm}>Save</SaveButton>
            </ButtonWrapper>
          </ModalContainer>
        </>
      )}
    </>
  );
};

const createModal: React.FC<ModalProps> = (props) => {
  const createModal: any = document.getElementById("modal");

  return ReactDOM.createPortal(<Modal {...props} />, createModal);
};

export default createModal;
