import { useState } from "react";
import Header from "../../components/header";
import Table from "../../components/table";
import {
  ProductContainer,
  InfoWrapper,
  SearchInput,
  AddProduct,
} from "./styles";

const Dashboard = () => {
  const [products, setProducts] = useState<any>([]);
  const [search, setSearch] = useState<string>("");

  const ItemList = products?.filter((a: any) =>
    a?.Cash_payment_voucher.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Header />
      <ProductContainer>
        <InfoWrapper>
          <SearchInput
            placeholder={"Search Products"}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AddProduct>Add Product</AddProduct>
        </InfoWrapper>
        <Table ItemList={ItemList} setProducts={setProducts} />
      </ProductContainer>
    </>
  );
};

export default Dashboard;
