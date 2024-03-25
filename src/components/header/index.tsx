import {useEffect, useState} from 'react';
import {HeaderContainer, Logo, SvgWrapper, Role, RightWrapper} from './styles';
import {LogoutSvg} from '../../assets';
import {useApp} from '../../contexts';
import {LogoImage} from '../../assets';
import {Modal} from '../index';
import {capitalize} from '../../utils/helpers';
import {RegistrationApi} from '../../libs/api/registration.api';

const Header = () => {
  const {setauthToken, setRole, role, setIsLoading} = useApp();
  const [visible, setvisible] = useState<boolean>(false);

  const logout = () => {
    localStorage.removeItem('token');
    setauthToken?.('');
  };
  const getUserDetails = async () => {
    setIsLoading(true);
    const res = await RegistrationApi?.getUserDetails();
    setRole?.(res?.role);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderContainer>
        <Logo src={LogoImage} loading="lazy" />
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
