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
  overflow-x: auto;
`;

export const TableWrapper = styled.table`
  display: table;
  background-color: #fff;
  width: 100%;
  min-width: 750px;
  color: rgba(0, 0, 0, 0.87);
  border-collapse: collapse;
  border-radius: 0 0 8px 8px;
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
