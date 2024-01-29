import {useState} from 'react';
import {Header, Table, Modal} from '../../components';
import {ProductContainer, InfoWrapper, SearchInput, AddProduct} from './styles';

const Dashboard = () => {
  const [products, setProducts] = useState<any | undefined>([]);
  const [search, setSearch] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const ItemList = products?.filter((a: any) =>
    (a?.Voucher_Number || a?.Date)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <ProductContainer>
        <InfoWrapper>
          <SearchInput
            placeholder={'Search Products'}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AddProduct onClick={() => setVisible(true)}>Add Product</AddProduct>
        </InfoWrapper>
        <Table ItemList={ItemList} setProducts={setProducts} />
      </ProductContainer>
      <Modal
        visible={visible}
        setProducts={setProducts}
        onCancel={() => setVisible(false)}
      />
    </>
  );
};

export default Dashboard;
