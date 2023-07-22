

export function SearchBar({onSearch}) {

    const onSearchSubmit = (e) => {
        e.preventDefault()
        onSearch(e.target.searchValue.value);
        
}

    return (
      <>
        <form onSubmit={onSearchSubmit}>
                <input name="searchValue"/>
                <button>Search</button>
        </form>
      </>
    );
}