import {useNavigate} from 'react-router-dom';
import {swalAlert} from '@utils/helpers';
import {useApp} from '@contexts';
import {RegistrationApi} from '@libs/api/registration.api';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';

const useLogin = () => {
  const navigate = useNavigate();
  const {setauthToken, storedToken, setIsLoading} = useApp() || {};
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (storedToken) {
      navigate('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormData = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await RegistrationApi?.login(formData);
      localStorage.setItem('token', res.authToken);
      setauthToken?.(res.authToken);
      swalAlert('Login Successfully');
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    handleFormData,
    handleSubmit,
    formData,
  };
};

export default useLogin;
