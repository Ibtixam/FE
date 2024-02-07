import {useEffect, useState} from 'react';
import {
  TableContainer,
  TableWrapper,
  TableRow,
  TableHead,
  TableData,
  VoucherImage,
  ImageWrapper,
  Image,
  DeleteButton,
} from './styles';
import {SharedApi} from '../../libs/api/sharedapi';
import {currencyFormat, getImageURL} from '../../utils/helpers';
import {Modal} from '..';

interface TableProps {
  ItemList?: any;
  products?: any;
  setProducts?: React.Dispatch<React.SetStateAction<any>>;
}

interface ItemType {
  _id: string;
  Voucher_Type: string;
  Voucher_Number: string;
  Amount: number;
  Date: string;
  Location: string;
  Voucher_Image: string;
  Voucher_Image_URL: string;
}

const Table: React.FC<TableProps> = ({ItemList, setProducts, products}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedTableID, setselectedTableID] = useState<string>('');

  const getProducts = async () => {
    const res = await SharedApi?.getItemList();
    if (setProducts && res) {
      setProducts(res);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async () => {
    const res = await SharedApi.deleteItem({id: selectedTableID});
    setVisible(false);
    if (products && setProducts) {
      setProducts((prev: any[]) =>
        prev.filter((voucher: {id: any}) => voucher.id !== selectedTableID)
      );
    }
    getProducts();
    console.log(res, selectedTableID);
  };

  return (
    <>
      <TableContainer>
        <TableWrapper>
          <thead style={{borderBottom: '1px solid rgba(224, 224, 224, 1)'}}>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Voucher Type</TableHead>
              <TableHead>Voucher Number</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {ItemList?.length ? (
              ItemList?.map((item: ItemType, index: number) => {
                const {
                  _id,
                  Voucher_Type,
                  Voucher_Number,
                  Voucher_Image,
                  Voucher_Image_URL,
                  Location,
                  Amount,
                  Date,
                } = item;
                return (
                  <TableRow key={index}>
                    <TableData>{index + 1}</TableData>
                    <TableData style={{padding: '6px 10px'}}>
                      {Voucher_Image_URL ? (
                        <VoucherImage
                          src={Voucher_Image_URL}
                          alt="voucher-img"
                          onClick={() => setSelectedImage(index)}
                        />
                      ) : (
                        <VoucherImage
                          src={getImageURL(Voucher_Image)}
                          alt="voucher-img"
                          onClick={() => setSelectedImage(index)}
                        />
                      )}
                      {selectedImage === index && (
                        <>
                          <ImageWrapper
                            onClick={() => setSelectedImage(null)}
                          />
                          <Image
                            src={
                              Voucher_Image_URL || getImageURL(Voucher_Image)
                            }
                          />
                        </>
                      )}
                    </TableData>
                    <TableData>{Voucher_Type}</TableData>
                    <TableData>{Voucher_Number}</TableData>
                    <TableData>
                      {Amount ? currencyFormat(Amount) : '---'}
                    </TableData>
                    <TableData>{Date}</TableData>
                    <TableData>{Location || '---'}</TableData>
                    <TableData>
                      <DeleteButton
                        onClick={() => {
                          setVisible(true);
                          setselectedTableID(_id);
                        }}
                      >
                        Delete
                      </DeleteButton>
                    </TableData>
                  </TableRow>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </TableWrapper>
      </TableContainer>
      <Modal
        description="Are you sure to delete the voucher?"
        visible={visible}
        onRequestClose={() => setVisible(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default Table;
