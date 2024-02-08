import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 25px;
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

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
`;

export const Role = styled.p`
  font-weight: 500;
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
