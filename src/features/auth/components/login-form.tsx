import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../../app/configs';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setCredentials } from '../auth.slice';
import { useLoginMutation } from '../hooks/useLoginMutation';
import { LoginReq } from '../user.type';

const PLACE_HOLDER = {
  ID: 'id',
  PW: 'password',
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  padding: 0.25rem 1rem;
`;

const LoginForm = () => {
  const [formState, setFormState] = useState<LoginReq>({ id: '', pw: '' });
  const [login, result] = useLoginMutation();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  // type assert as any due to react router type error
  const state = location.state as any;
  const from = state?.from.pathname || '/';

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value },
      } = e;
      setFormState((prev) => ({ ...prev, [name]: value }));
    },
    [setFormState]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      login(formState);
    },
    [formState]
  );

  useEffect(() => {
    const { data, isError } = result;

    if (data?.payload) {
      dispatch(setCredentials(data.payload));
      navigate(from, { replace: true });
    }
    if (isError) {
      alert('login fail');
    }
  }, [result]);

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Input
        name='id'
        type='text'
        placeholder={PLACE_HOLDER.ID}
        onChange={handleChange}
      />
      <Input
        name='pw'
        type='password'
        placeholder={PLACE_HOLDER.PW}
        onChange={handleChange}
      />
      <Input type='submit' />
    </Form>
  );
};

export default LoginForm;
