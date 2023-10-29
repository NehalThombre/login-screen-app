// components/InputField.js

import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const InputField = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} />;
};

export default InputField;
