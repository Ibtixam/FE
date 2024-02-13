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
import {InputWrapper, Label, Input} from './modal/styles';
interface ModalInputProps {
  Voucher_Type: string;
  Voucher_Number: string;
  Amount: string;
  Date: string;
  Location: string;
  Voucher_Image: File | null;
  Voucher_Image_URL: string;
}

interface searchDateProps {
  startDate: string;
  endDate: string;
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
  const [voucherVisible, setVoucherVisible] = useState<boolean>(false);
  const [dateFilterVisible, setDateFilterVisible] = useState<boolean>(false);
  const [searchDate, setSearchDate] = useState<searchDateProps>({
    startDate: '',
    endDate: '',
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  const ItemList = products?.filter(
    (a: any) =>
      !search ||
      (a?.Voucher_Number).toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      setSearch(inputValue);
    }
  };

  const isVoucherFormFilled = (data: ModalInputProps): boolean => {
    const isGTNNumber = data.Voucher_Type === 'GTN_Number';
    return data.Voucher_Type.trim() !== '' &&
      data.Voucher_Number.trim().length >= 7 &&
      data.Date.trim() !== '' &&
      data.Voucher_Image !== null &&
      isGTNNumber
      ? data.Location.trim() !== ''
      : data.Amount.trim().length >= 2;
  };

  const handleAddVoucher = async () => {
    if (isVoucherFormFilled(modalInputData)) {
      const res = await SharedApi.addItem(modalInputData);
      if (products) {
        setProducts((prev: any) => [
          ...prev,
          {
            ...modalInputData,
            Voucher_Image: {name: modalInputData?.Voucher_Image?.name || ''},
            _id: res?.id,
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
      swalAlert(res?.data);
      setImagePreview(UploadImage);
      setVoucherVisible(false);
    } else {
      swalAlert('Please fill all required fields with valid values.', 'error');
    }
  };

  const handleDateSearchChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const {value, name} = e.target;
    setSearchDate((prev: any) => ({...prev, [name]: value}));
  };

  const handleDateSearch = () => {
    if (searchDate.startDate && searchDate.endDate) {
      const filteredProducts = products.filter(
        (a: any) =>
          a.Date >= searchDate.startDate && a.Date <= searchDate.endDate
      );
      setProducts(filteredProducts);
    } else {
      swalAlert(
        'Please provide both start and end dates for the search',
        'error'
      );
    }
    setDateFilterVisible(false);
  };

  const DateFilterModalContent = () => {
    return (
      <>
        <InputWrapper>
          <Label>Start Date: </Label>
          <Input
            name="startDate"
            type="Date"
            value={searchDate.startDate}
            onChange={handleDateSearchChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>End Date: </Label>
          <Input
            name="endDate"
            type="Date"
            value={searchDate.endDate}
            onChange={handleDateSearchChange}
          />
        </InputWrapper>
      </>
    );
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
            <AddProduct onClick={() => setDateFilterVisible(true)}>
              Search with Date
            </AddProduct>
            <AddProduct onClick={() => setVoucherVisible(true)}>
              Add Voucher
            </AddProduct>
          </div>
        </InfoWrapper>
        <Table
          ItemList={ItemList}
          setProducts={setProducts}
          products={products}
        />
      </ProductContainer>
      {/* Voucher Add Modal */}
      <Modal
        ok={'Save'}
        visible={voucherVisible}
        title={'Add Voucher'}
        onRequestClose={() => setVoucherVisible(false)}
        onConfirm={handleAddVoucher}
        component={ModalContent}
        modalcontentprops={{
          modalInputData,
          setModalInputData,
          imagePreview,
          setImagePreview,
        }}
      />
      {/* Date Search Modal */}
      <Modal
        ok={'Search'}
        visible={dateFilterVisible}
        title={'Search with Date'}
        onRequestClose={() => setDateFilterVisible(false)}
        onConfirm={handleDateSearch}
        component={DateFilterModalContent}
      />
    </>
  );
};

export default Dashboard;
