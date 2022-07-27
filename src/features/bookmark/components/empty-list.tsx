import styled from 'styled-components';

const INFO_TXT = `No bookmarks :(`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;
  font-size: 1.5rem;
  color: gray;
`;

const EmptyList = () => {
  return (
    <FlexDiv>
      <span>{INFO_TXT}</span>
    </FlexDiv>
  );
};

export default EmptyList;
