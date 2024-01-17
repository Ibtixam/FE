import { TableWrapper, TableRow, TableHead, TableData } from "./style";

const Table = () => {
  return (
    <TableWrapper>
      <TableRow>
        <TableHead>No.</TableHead>
        <TableHead>Cash Payment Voucher</TableHead>
        <TableHead>Salary Payment Voucher</TableHead>
        <TableHead>GTN Number</TableHead>
      </TableRow>
      <tbody>
        <TableRow>
          <TableData>1</TableData>
          <TableData>9245badfhy93242</TableData>
          <TableData>288mnfc6230xkdjw</TableData>
          <TableData>670098</TableData>
        </TableRow>
        <TableRow>
          <TableData>1</TableData>
          <TableData>9245badfhy93242</TableData>
          <TableData>288mnfc6230xkdjw</TableData>
          <TableData>670098</TableData>
        </TableRow>
        <TableRow>
          <TableData>1</TableData>
          <TableData>9245badfhy93242</TableData>
          <TableData>288mnfc6230xkdjw</TableData>
          <TableData>670098</TableData>
        </TableRow>
        <TableRow>
          <TableData>1</TableData>
          <TableData>9245badfhy93242</TableData>
          <TableData>288mnfc6230xkdjw</TableData>
          <TableData>670098</TableData>
        </TableRow>
      </tbody>
    </TableWrapper>
  );
};

export default Table;
