import styled, {keyframes} from 'styled-components';

const opacityAnimation = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const TableContainer = styled.div`
  width: 100%;
  max-height: 410px;
  overflow-x: auto;
  border-radius: 0 0 8px 8px;
  @media only screen and (max-width: 400px) {
    max-height: 500px;
  }
`;

export const TableWrapper = styled.table`
  display: table;
  background-color: #fff;
  width: 100%;
  min-width: 880px;
  height: 100%;
  color: rgba(0, 0, 0, 0.87);
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  position: sticky;
  top: 0px;
  background: #fff;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  &:last-child {
    border-bottom: 0;
  }
`;

export const TableHead = styled.th`
  padding: 15px 10px;
  font-weight: 500;
  font-size: 16px;
`;

export const TableData = styled.td`
  text-align: center;
  padding: 12px 10px;
  font-size: 15px;
`;

export const VoucherImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  animation: ${opacityAnimation} ease-in-out 0.2s;
`;

export const Image = styled.img`
  width: 60%;
  height: 500px;
  border-radius: 5px;
  object-fit: contain;
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  animation: ${opacityAnimation} ease-in-out 0.2s;
  transform: translate(-50%, -50%);
`;

export const DeleteButton = styled.button`
  outline: none;
  border: none;
  padding: 8px;
  font-size: 13px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #fff0f2;
  color: #d11a2a;
  border: 2px solid #d11a2a;
  &:active {
    transform: scale(0.98);
  }
`;
