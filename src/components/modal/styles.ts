import styled, {css, keyframes} from 'styled-components';

const opacityAnimation = keyframes`    
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}`;

interface ModalContainerProps {
  $hideButtonPadding?: boolean;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  min-width: 320px;
  max-width: 500px;
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
  padding-top: 15px;
  animation: ${opacityAnimation} 0.3s ease-out;
  .select-voucher {
    width: 190px;
    font-size: 13px;
  }
  .voucher-image {
    border: 1px solid hsl(0, 0%, 70%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    align-self: center;
    cursor: pointer;
    overflow: hidden;
  }
  ${({$hideButtonPadding}) =>
    $hideButtonPadding &&
    css`
      padding: 15px 0;
    `}
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`;

export const Title = styled.h2`
  font-size: 19px;
  font-weight: 500;
  color: #445;
`;

export const ButtonWrapper = styled.div`
  margin: 8px 0;
  border-top: 1px solid #dadada;
  padding: 10px 20px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;

export const CancelButton = styled.button`
  border-radius: 20px;
  border: none;
  padding: 7px 12px;
  cursor: pointer;
  background-color: #e6e6e6;
  color: #444;
`;

export const SaveButton = styled.button`
  border-radius: 20px;
  border: none;
  padding: 7px 12px;
  cursor: pointer;
  color: #fff;
  background: #176b87;
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #444;
`;
