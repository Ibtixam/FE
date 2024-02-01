import {useState, useRef} from 'react';
import {Header, Table, Modal} from '../../components';
import {
  ProductContainer,
  InfoWrapper,
  SearchInput,
  AddProduct,
  SearchButton,
} from './styles';

const Dashboard = () => {
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
          <AddProduct onClick={() => setVisible(true)}>Add Product</AddProduct>
        </InfoWrapper>
        <Table ItemList={ItemList} setProducts={setProducts} />
      </ProductContainer>
      <Modal
        visible={visible}
        title={'Add Voucher'}
        setProducts={setProducts}
        onCancel={() => setVisible(false)}
      />
    </>
  );
};

export default Dashboard;
