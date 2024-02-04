import {ComponentType} from 'react';
import {
  ModalContainer,
  Title,
  Overlay,
  ButtonWrapper,
  CancelButton,
  SaveButton,
} from './styles';
import ReactDOM from 'react-dom';
import React from 'react';

interface ModalProps {
  visible?: boolean;
  props?: any;
  title?: string;
  ok?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  component?: ComponentType<any> | undefined;
  modalcontentprops?: object;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onCancel,
  onConfirm,
  title,
  ok,
  modalcontentprops,
  component: Component,
}) => {
  return (
    <>
      {visible && Component && (
        <>
          <Overlay onClick={onCancel} />
          <ModalContainer>
            <Title>{title}</Title>
            <Component data={modalcontentprops} />
            <ButtonWrapper>
              <CancelButton onClick={onCancel}>Cancel</CancelButton>
              <SaveButton onClick={onConfirm}>{ok || 'Ok'}</SaveButton>
            </ButtonWrapper>
          </ModalContainer>
        </>
      )}
    </>
  );
};

const createModal: React.FC<ModalProps> = (props) => {
  const createModal: any = document.getElementById('modal');
  return ReactDOM.createPortal(<Modal {...props} />, createModal);
};

export default createModal;
