import {HeaderContainer, Logo, SvgWrapper} from './styles';
import {LogoutSvg} from '../../assets/svgs';
import {useApp} from '../../contexts';
import {LogoImage} from '../../assets/svgs';
import {Modal} from '../index';
import {useState} from 'react';

const Header = () => {
  const {setauthToken} = useApp() || {};
  const [visible, setvisible] = useState<boolean>(false);

  const logout = () => {
    localStorage.removeItem('token');
    setauthToken?.('');
  };

  return (
    <>
      <HeaderContainer>
        <Logo src={LogoImage} />
        <SvgWrapper onClick={() => setvisible(true)}>
          <LogoutSvg />
        </SvgWrapper>
      </HeaderContainer>
      <Modal
        visible={visible}
        onRequestClose={() => setvisible(false)}
        description="Are you sure to Logout?"
        onConfirm={logout}
      />
    </>
  );
};

export default Header;
