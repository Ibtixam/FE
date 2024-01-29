import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 59px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const HeaderTitle = styled.h1`
  font-size: 22px;
  pointer-events: none;
  user-select: none;
`;

export const SvgWrapper = styled.div`
  padding: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(139, 139, 139, 0.4);
  }
`;
