import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { setQuery } from '../../features/search/search.slice';
import { useAppDispatch, useAppSelector } from '../hooks';

const PLACE_HOLDER = 'Search article by title, content';

interface SearchBarProps {
  onSubmit?: (inputValue: string) => void;
}

const Input = styled.input`
  width: 30rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: solid 1px black;
`;

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const query = useAppSelector((state) => state.search.query);

  const dispatch = useAppDispatch();

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && inputValue) {
        if (onSubmit) {
          onSubmit(inputValue);
        }
        dispatch(setQuery(inputValue));
      }
    },
    [inputValue, onSubmit, dispatch, setQuery]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [setQuery]
  );

  useEffect(() => {
    setInputValue(query);
  }, [query, setInputValue]);

  return (
    <Input
      type={'text'}
      placeholder={PLACE_HOLDER}
      onKeyDown={handleKeyDown}
      value={inputValue}
      onChange={handleChange}
    ></Input>
  );
};

export default SearchBar;
