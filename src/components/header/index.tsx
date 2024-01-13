import { HeaderContainer, HeaderTitle, SvgWrapper } from "./styles";
import { LogoutSvg } from "../../assets/svgs";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Product Admin</HeaderTitle>
      <SvgWrapper>
        <LogoutSvg />
      </SvgWrapper>
    </HeaderContainer>
  );
};

export default Header;
