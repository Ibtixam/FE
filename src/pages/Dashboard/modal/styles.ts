import styled from 'styled-components';

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
  border: 1px solid hsl(0, 0%, 80%);
  padding: 8px 10px;
  &:focus {
    border: 2px solid #3f92ff;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  font-size: 13px;
`;

export const VoucherImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
