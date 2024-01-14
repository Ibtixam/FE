import { useState, ChangeEvent, FormEvent } from "react";
import {
  Wrapper,
  LoginContainer,
  LoginButton,
  TitleContainer,
  FormContainer,
  Title,
} from "./styles.js";
import Input from "../../components/input";
import axios from "axios";
import { BASE_URL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { swalAlert } from "../../utils/helpers";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormData = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/login`, formData);
      localStorage.setItem("token", res.data.authToken);
      swalAlert("Login Successfully");
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (error) {
      console.error(error);
      swalAlert("Invalid Email or Password", "error");
    }
  };

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
