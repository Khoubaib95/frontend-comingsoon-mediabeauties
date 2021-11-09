const SearchIconsList = () => (
  <div id="search-icons">
    {["search", "place", "favorite", "map", "article", "local_mall"].map(
      (el: string, i: number) => (
        <span
          key={i}
          className="search-item"
          style={{
            backgroundColor: "#7249a7",
            margin: "0 10px 0 0",
            borderRadius: 0,
            padding: "2px 15px",
          }}
        >
          <span className="material-icons"> {el} </span>
        </span>
      )
    )}
  </div>
);
export default SearchIconsList;
