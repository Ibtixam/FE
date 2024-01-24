import {useEffect} from 'react';
import {TableWrapper, TableRow, TableHead, TableData} from './style';
import {SharedApi} from '../../libs/api/sharedapi';
import {currencyFormat} from '../../utils/helpers';

interface TableProps {
  ItemList: any;
  setProducts: React.Dispatch<React.SetStateAction<any>>;
}

interface ItemType {
  Voucher_Type: string;
  Voucher_Number: string;
  Amount: number;
  Date: string;
}

const Table: React.FC<TableProps> = ({ItemList, setProducts}) => {
  const getProducts = async () => {
    const res = await SharedApi?.getItemList();
    setProducts(res);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableWrapper>
      <thead style={{borderBottom: '1px solid rgba(224, 224, 224, 1)'}}>
        <TableRow>
          <TableHead>No.</TableHead>
          <TableHead>Voucher Type</TableHead>
          <TableHead>Voucher Number</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {ItemList?.map((item: ItemType, index: number) => {
          const {Voucher_Type, Voucher_Number, Amount, Date} = item;
          return (
            <TableRow key={index}>
              <TableData>{index + 1}</TableData>
              <TableData>{Voucher_Type}</TableData>
              <TableData>{Voucher_Number}</TableData>
              <TableData>{currencyFormat(Amount)}</TableData>
              <TableData>{Date}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
