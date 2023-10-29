import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const ChangePasswordLink = styled.button`
  color: #007bff;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  align-self: flex-end;
  font-size: 14px;
`;

const LinkButton = styled.button`
  color: #007bff;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleTermsAgreedChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !rememberMe || !termsAgreed) {
      setError('Please fill all fields and accept terms');
      return;
    }
    setError('');
    
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Login</Title>

      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <ChangePasswordLink>Forgot your password?</ChangePasswordLink>

      <div>
        <label>
          <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
          Remember Me
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" checked={termsAgreed} onChange={handleTermsAgreedChange} />
          I Agree to <LinkButton>Terms and Conditions</LinkButton>
        </label>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <SubmitButton text="Login" />
    </FormContainer>
  );
};

export default LoginForm;
