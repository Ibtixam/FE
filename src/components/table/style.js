import styled from "styled-components";

export const TableWrapper = styled.table`
  display: table;
  background-color: #fff;
  width: 85%;
  margin: 40px auto;
  color: rgba(0, 0, 0, 0.87);
  border-collapse: collapse;
  border-radius: 8px;
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
