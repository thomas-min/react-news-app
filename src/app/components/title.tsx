import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
}

const Text = styled.h1`
  font-size: 2.5rem;
`;

const Title: React.FC<TitleProps> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Title;
