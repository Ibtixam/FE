import { useEffect } from "react";
import { TableWrapper, TableRow, TableHead, TableData } from "./style";
import { BASE_URL } from "../../utils/constant";
import axios from "axios";

interface TableProps {
  ItemList: any;
  setProducts: React.Dispatch<React.SetStateAction<any>>;
}

interface ItemType {
  Cash_payment_voucher: string;
  GTN_Number: string;
  Salary_payment_voucher: string;
}

const Table: React.FC<TableProps> = ({ ItemList, setProducts }) => {
  const getProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/get/products`);
      setProducts(res?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableWrapper>
      <TableRow>
        <TableHead>No.</TableHead>
        <TableHead>Cash Payment Voucher</TableHead>
        <TableHead>Salary Payment Voucher</TableHead>
        <TableHead>GTN Number</TableHead>
      </TableRow>
      <tbody>
        {ItemList?.map((item: ItemType, index: number) => {
          const { Cash_payment_voucher, GTN_Number, Salary_payment_voucher } =
            item;
          return (
            <TableRow key={index}>
              <TableData>{index + 1}</TableData>
              <TableData>{Cash_payment_voucher}</TableData>
              <TableData>{Salary_payment_voucher}</TableData>
              <TableData>{GTN_Number}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
