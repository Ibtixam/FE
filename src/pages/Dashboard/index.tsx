import {useState, useRef} from 'react';
import {Header, Table, Modal} from '@components';
import {
  ProductContainer,
  InfoWrapper,
  SearchInput,
  AddProduct,
  SearchButton,
} from './styles';
import ModalContent from './modal';
import {InputWrapper, Label, Input} from './modal/styles';
import {useApp} from '@contexts';

interface searchDateProps {
  startDate: string;
  endDate: string;
}

const Dashboard = () => {
  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dateFilterVisible, setDateFilterVisible] = useState<boolean>(false);
  const [searchDate, setSearchDate] = useState<searchDateProps>({
    startDate: '',
    endDate: '',
  });
  const {
    addVoucher,
    searchVoucherByDate,
    voucher,
    voucherVisible,
    setVoucherVisible,
    modalInputData,
    setModalInputData,
    imagePreview,
    setImagePreview,
  } = useApp();

  const ItemList = voucher?.filter(
    (a: any) =>
      !search ||
      (a?.Voucher_Number).toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current?.value || '';
      setSearch(inputValue);
    }
  };

  const handleDateSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setSearchDate((prev: any) => ({...prev, [name]: value}));
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
        <Table ItemList={ItemList} />
      </ProductContainer>
      {/* Voucher Add Modal */}
      <Modal
        ok={'Save'}
        visible={voucherVisible}
        title={'Add Voucher'}
        onRequestClose={() => setVoucherVisible(false)}
        onConfirm={addVoucher}
        content={
          <ModalContent
            data={{
              modalInputData,
              setModalInputData,
              imagePreview,
              setImagePreview,
            }}
          />
        }
      />
      {/* Date Search Modal */}
      <Modal
        ok={'Search'}
        visible={dateFilterVisible}
        title={'Search with Date'}
        onRequestClose={() => setDateFilterVisible(false)}
        onConfirm={() => {
          searchVoucherByDate(searchDate);
          if (searchDate.startDate && searchDate.endDate) {
            setDateFilterVisible(false);
          }
        }}
        content={<DateFilterModalContent />}
      />
    </>
  );
};

export default Dashboard;
