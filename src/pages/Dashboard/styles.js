import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;

export const Title = styled.h2`
  font-size: 23px;
  pointer-events: none;
  user-select: none;
`;

export const AddButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 6px 15px;
  border-radius: 4px;
  background: #176b87;
  color: #fff;
  font-size: 15px;
  &:active {
    transform: scale(0.88);
  }
`;
