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
import useDashboard from './useDashboard';

const Dashboard = () => {
  const {
    addVoucher,
    voucherVisible,
    ItemList,
    deleteVoucher,
    handleDateSearchChange,
    onSearch,
    showVoucherModal,
    hideVoucherModal,
    showDateFilterModal,
    onDateModalConfirm,
    searchDate,
    onSearchChange,
    hideDateFilterModal,
    inputRef,
    dateFilterVisible,
    modalContentStates,
  } = useDashboard();

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
              onChange={onSearchChange}
            />
            <SearchButton onClick={onSearch}>Search</SearchButton>
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <AddProduct onClick={showDateFilterModal}>
              Search with Date
            </AddProduct>
            <AddProduct onClick={showVoucherModal}>Add Voucher</AddProduct>
          </div>
        </InfoWrapper>
        <Table ItemList={ItemList} onDeleteClick={(tableId) => deleteVoucher(tableId)} />
      </ProductContainer>
      {/* Voucher Add Modal */}
      <Modal
        ok={'Save'}
        visible={voucherVisible}
        title={'Add Voucher'}
        onRequestClose={hideVoucherModal}
        onConfirm={addVoucher}
        content={
          <ModalContent
            data={{
              ...modalContentStates,
            }}
          />
        }
      />
      {/* Date Search Modal */}
      <Modal
        ok={'Search'}
        visible={dateFilterVisible}
        title={'Search with Date'}
        onRequestClose={hideDateFilterModal}
        onConfirm={onDateModalConfirm}
        content={<DateFilterModalContent />}
      />
    </>
  );
};

export default Dashboard;
