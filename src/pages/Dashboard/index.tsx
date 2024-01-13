import Header from "../../components/header";
import { ProductContainer, InfoWrapper, Title, AddButton } from "./styles";

const Dashboard = () => {
  return (
    <>
      <Header />
      <ProductContainer>
        <InfoWrapper>
          <Title>Products</Title>
          <AddButton>Add Product</AddButton>
        </InfoWrapper>
      </ProductContainer>
    </>
  );
};

export default Dashboard;
