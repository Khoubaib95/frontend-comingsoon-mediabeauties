import { itemsType } from "../../@types/types";
const SearchItems = () => (
  <div id="search-items-container">
    {[
      { name: "gym", col: "125 42 232", opc: 35 },
      { name: "fitness", col: "11 94 215", opc: 35 },
      { name: "trend & fashion", col: "220 53 69", opc: 35 },
      { name: "Aesthetics", col: "255 191 145", opc: 50 },
      { name: "body care", col: "130 180 64", opc: 50 },
      { name: "skin care", col: "255 150 75", opc: 50 },
      { name: "Spa & Wellness", col: "249 163 146", opc: 50 },
    ].map((el: itemsType, i: number) => (
      <span
        key={i}
        className="search-item"
        style={{
          backgroundColor: `rgb(${el.col})`,
          boxShadow: `0 0 0 0.25rem rgb(${el.col} / ${el.opc}%)`,
        }}
      >
        {el.name}
      </span>
    ))}
  </div>
);
export default SearchItems;
