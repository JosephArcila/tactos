const Search = ({ handleSearch }) => {
  return (
    <input
      id="myInput"
      type="text"            
      placeholder="¿Qué tema buscas?"
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default Search;
