// components/SubmitButton.js

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SubmitButton = ({ text }) => {
  return <Button>{text}</Button>;
};

export default SubmitButton;
