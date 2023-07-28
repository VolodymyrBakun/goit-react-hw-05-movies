import PropTypes from 'prop-types';
import { StyledSearchBar, StyledSearchBarForm } from './StyledSearchBar';

export function SearchBar({ onSearch }) {
  const onSearchSubmit = e => {
    e.preventDefault();
    onSearch(e.target.searchValue.value);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarForm onSubmit={onSearchSubmit}>
        <input name="searchValue" />
        <button>Search</button>
      </StyledSearchBarForm>
    </StyledSearchBar>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
