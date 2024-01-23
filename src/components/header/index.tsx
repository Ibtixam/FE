import {HeaderContainer, HeaderTitle, SvgWrapper} from './styles';
import {LogoutSvg} from '../../assets/svgs';
import {useApp} from '../../contexts';

const Header = () => {
  const {setauthToken} = useApp() || {};
  const logout = () => {
    localStorage.removeItem('token');
    setauthToken?.('');
  };
  return (
    <HeaderContainer>
      <HeaderTitle>Product Admin</HeaderTitle>
      <SvgWrapper onClick={logout}>
        <LogoutSvg />
      </SvgWrapper>
    </HeaderContainer>
  );
};

export default Header;
