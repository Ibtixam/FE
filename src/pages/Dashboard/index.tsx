import {useState, useRef} from 'react';
import {Header, Table, Modal} from '../../components';
import {
  ProductContainer,
  InfoWrapper,
  SearchInput,
  AddProduct,
  SearchButton,
} from './styles';
import {swalAlert} from '../../utils/helpers';
import {SharedApi} from '../../libs/api/sharedapi';
import {UploadImage} from '../../assets/svgs';
import ModalContent from './modal';
interface ModalInputProps {
  Voucher_Type: string;
  Voucher_Number: string;
  Amount: string;
  Date: string;
  Location: string;
  Voucher_Image: File | null;
  Voucher_Image_URL: string;
}

const Dashboard = () => {
  const [modalInputData, setModalInputData] = useState<ModalInputProps>({
    Voucher_Type: '',
    Voucher_Number: '',
    Amount: '',
    Location: '',
    Date: '',
    Voucher_Image: null,
    Voucher_Image_URL: '',
  });
  const [imagePreview, setImagePreview] = useState<string>(UploadImage);
  const [products, setProducts] = useState<any | undefined>([]);
  const [search, setSearch] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const ItemList = products?.filter((a: any) =>
    (a?.Voucher_Number).toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      setSearch(inputValue);
    }
  };

  const handleSave = async () => {
    const res = await SharedApi?.addItem(modalInputData);
    if (setProducts) {
      setProducts((prev: any) => [
        ...prev,
        {
          ...modalInputData,
          Voucher_Image: {name: modalInputData?.Voucher_Image?.name},
        },
      ]);
    }
    setModalInputData({
      Voucher_Type: '',
      Voucher_Number: '',
      Amount: '',
      Location: '',
      Date: '',
      Voucher_Image: null,
      Voucher_Image_URL: '',
    });
    swalAlert('Product Added Successfully');
    setImagePreview(UploadImage);
    setVisible(false);
    return res;
  };

  return (
    <>
      <Header />
      <ProductContainer>
        <InfoWrapper>
          <div>
            <SearchInput
              placeholder={'Search by Voucher No.'}
              ref={inputRef}
              onChange={(e) => {
                if (!e.target.value) {
                  setSearch(e.target.value);
                }
              }}
            />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <AddProduct>Filter with Date</AddProduct>
            <AddProduct onClick={() => setVisible(true)}>
              Add Product
            </AddProduct>
          </div>
        </InfoWrapper>
        <Table ItemList={ItemList} setProducts={setProducts} />
      </ProductContainer>
      <Modal
        ok={'Save'}
        visible={visible}
        title={'Add Voucher'}
        onCancel={() => setVisible(false)}
        onConfirm={handleSave}
        component={ModalContent}
        modalcontentprops={{
          modalInputData,
          setModalInputData,
          imagePreview,
          setImagePreview,
        }}
      />
    </>
  );
};

export default Dashboard;
