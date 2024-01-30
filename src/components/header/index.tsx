import {HeaderContainer, Logo, SvgWrapper} from './styles';
import {LogoutSvg} from '../../assets/svgs';
import {useApp} from '../../contexts';
import {LogoImage} from '../../assets/svgs';

const Header = () => {
  const {setauthToken} = useApp() || {};
  const logout = () => {
    localStorage.removeItem('token');
    setauthToken?.('');
  };
  return (
    <HeaderContainer>
      <Logo src={LogoImage} />
      <SvgWrapper onClick={logout}>
        <LogoutSvg />
      </SvgWrapper>
    </HeaderContainer>
  );
};

export default Header;
