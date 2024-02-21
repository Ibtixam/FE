import {ComponentType} from 'react';
import {
  ModalContainer,
  Title,
  Overlay,
  ButtonWrapper,
  CancelButton,
  SaveButton,
  Description,
} from './styles';
import ReactDOM from 'react-dom';
import React from 'react';

interface ModalProps {
  visible?: boolean;
  props?: any;
  title?: string;
  ok?: string;
  onConfirm?: () => void;
  onRequestClose?: () => void;
  component?: ComponentType<any> | undefined;
  modalcontentprops?: object;
  hideActionButton?: boolean;
  description?: string;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onRequestClose,
  onConfirm,
  title,
  ok,
  modalcontentprops,
  component: Component,
  description,
}) => {
  return (
    <>
      {visible && (
        <>
          <Overlay onClick={onRequestClose} />
          <ModalContainer>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
            {Component && <Component data={modalcontentprops} />}
            <ButtonWrapper>
              <CancelButton onClick={onRequestClose}>Cancel</CancelButton>
              <SaveButton onClick={onConfirm}>{ok || 'Ok'}</SaveButton>
            </ButtonWrapper>
          </ModalContainer>
        </>
      )}
    </>
  );
};

const createModal: React.FC<ModalProps> = (props: any) => {
  const createModal: any = document.getElementById('modal');
  return ReactDOM.createPortal(<Modal {...props} />, createModal);
};

export default createModal;
