import styled, {keyframes} from 'styled-components';

const opacityAnimation = keyframes`    
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}`;

export const ModalContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  z-index: 10;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #444;
  /* opacity: ${({$visible}) => ($visible ? 1 : 0)}; */
  animation: ${opacityAnimation} 0.3s ease-out;
  .select-voucher {
    width: 190px;
    font-size: 13px;
    padding: 2px;
  }
  .voucher-image {
    border: 2px solid #a9a9a9;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    align-self: center;
    cursor: pointer;
    overflow: hidden;
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
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
  width: 190px;
  border-radius: 3px;
  border: 1px solid #dadada;
  padding: 8px 10px;
  &:focus {
    border: 1px solid #176b87;
  }
`;

export const SvgWrapper = styled.div`
  padding: 8px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: absolute;
  right: 24px;
  &:hover {
    background-color: rgba(139, 139, 139, 0.4);
  }
`;

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
