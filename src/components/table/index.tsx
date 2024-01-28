import {useEffect} from 'react';
import {
  TableWrapper,
  TableRow,
  TableHead,
  TableData,
  VoucherImage,
} from './styles';
import {SharedApi} from '../../libs/api/sharedapi';
import {currencyFormat, getImageURL} from '../../utils/helpers';

interface TableProps {
  ItemList: any;
  setProducts: React.Dispatch<React.SetStateAction<any>>;
}

interface ItemType {
  Voucher_Type: string;
  Voucher_Number: string;
  Amount: number;
  Date: string;
  Voucher_Image: string;
  Voucher_Image_URL: string;
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
          <TableHead>Voucher Image</TableHead>
          <TableHead>Voucher Type</TableHead>
          <TableHead>Voucher Number</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {ItemList?.map((item: ItemType, index: number) => {
          const {
            Voucher_Type,
            Voucher_Number,
            Voucher_Image,
            Voucher_Image_URL,
            Amount,
            Date,
          } = item;
          return (
            <TableRow key={index}>
              <TableData>{index + 1}</TableData>
              <TableData style={{padding: '6px 10px'}}>
                {Voucher_Image_URL ? (
                  <VoucherImage src={Voucher_Image_URL} alt="voucher-img" />
                ) : (
                  <VoucherImage
                    src={getImageURL(Voucher_Image)}
                    alt="voucher-img"
                  />
                )}
              </TableData>
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
