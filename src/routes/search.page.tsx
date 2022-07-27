import ArticleList from '../features/search/components/article-list';
import Container from '../app/components/container';
import Title from '../app/components/title';
import SearchBar from '../app/components/search-bar';
import SortSelect from '../features/search/components/sort-select';
import styled from 'styled-components';
import TopNav from '../app/components/top-nav';
import Main from '../app/components/main';

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Search = () => {
  return (
    <FlexDiv>
      <SearchBar />
      <SortSelect />
    </FlexDiv>
  );
};

const SearchPage = () => {
  return (
    <Container>
      <TopNav />
      <Title>Search for news articles</Title>
      <Search />
      <Main>
        <ArticleList />
      </Main>
    </Container>
  );
};

export default SearchPage;
