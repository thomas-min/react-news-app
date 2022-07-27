import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

const CenterDiv = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

interface ContainerProps {
  children?: React.ReactNode;
  center?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, center }) => {
  if (center) return <CenterDiv>{children}</CenterDiv>;
  return <Div>{children}</Div>;
};

export default Container;
