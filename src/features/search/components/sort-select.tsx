import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { setSortBy } from '../search.slice';
import { SortBy } from '../search.type';

const Select = styled.select`
  font-size: 1.2rem;
  padding: 0 0.5rem;
`;

const SortSelect = () => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortBy(e.target.value as SortBy));
    },
    [dispatch, setSortBy]
  );

  return (
    <Select onChange={handleChange}>
      <option value={SortBy.Popularity}>Popular Source</option>
      <option value={SortBy.PublishedAt}>Latest</option>
    </Select>
  );
};

export default SortSelect;
