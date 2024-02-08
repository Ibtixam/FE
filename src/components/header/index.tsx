import {HeaderContainer, Logo, SvgWrapper, Role, RightWrapper} from './styles';
import {LogoutSvg} from '../../assets/svgs';
import {useApp} from '../../contexts';
import {LogoImage} from '../../assets/svgs';
import {Modal} from '../index';
import {useEffect, useState} from 'react';
import {capitalize} from '../../utils/helpers';
import {RegistrationApi} from '../../libs/api/registration.api';

const Header = () => {
  const {setauthToken, setRole, role} = useApp() || {};
  const [visible, setvisible] = useState<boolean>(false);

  const logout = () => {
    localStorage.removeItem('token');
    setauthToken?.('');
  };
  const getUserDetails = async () => {
    const res = await RegistrationApi?.getUserDetails();
    setRole?.(res?.role);
  };

  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderContainer>
        <Logo src={LogoImage} />
        <RightWrapper>
          <Role>Role: {capitalize(role)}</Role>
          <SvgWrapper onClick={() => setvisible(true)}>
            <LogoutSvg />
          </SvgWrapper>
        </RightWrapper>
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
