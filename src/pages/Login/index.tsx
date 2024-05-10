import {
  Wrapper,
  LoginContainer,
  LoginButton,
  TitleContainer,
  FormContainer,
  Title,
} from './styles';
import {Input} from '@components';
import useLogin from './useLogin';

const Login = () => {
  const {handleFormData, handleSubmit, formData} = useLogin();
  return (
    <Wrapper>
      <LoginContainer>
        <TitleContainer>
          <Title>LOGIN</Title>
        </TitleContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleFormData}
          />
          <Input
            name="password"
            type="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleFormData}
          />
          <LoginButton type="submit">Login</LoginButton>
        </FormContainer>
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
