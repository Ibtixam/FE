import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 85%;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
`;

export const SearchInput = styled.input`
  border: 2px solid transparent;
  outline: none;
  background-color: #fff;
  padding: 7px 20px;
  border-radius: 6px;
  width: 300px;
  &:focus {
    border: 2px solid #86b6f6;
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
