import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 90px;
  @media only screen and (max-width: 700px) {
    padding: 0 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 30px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background-color: #176b87;
  color: #fff;
  @media only screen and (max-width: 700px) {
    justify-content: flex-start;
  }
`;

export const SearchInput = styled.input`
  border: 2px solid transparent;
  outline: none;
  background-color: #fff;
  padding: 8px 20px;
  border-radius: 6px 0 0 6px;
  width: 280px;
  height: 39px;
  &:focus {
    border: 2px solid #86b6f6;
  }
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export const AddProduct = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  background: #86b6f6;
  &:active {
    transform: scale(0.99);
  }
`;

export const SearchButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 9px 12px;
  border-radius: 0 6px 6px 0;
  color: #fff;
  font-size: 14px;
  background: #86b6f6;
  &:active {
    transform: scale(0.99);
  }
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
