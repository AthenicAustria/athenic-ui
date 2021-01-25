import React, { CSSProperties } from "react";

export interface SearchInput {
  style?: CSSProperties;
  className?: string;
  searchIcon?: boolean;
}

const SearchInput = ({ style, className }: SearchInput) => {
  return (
    <div className="search-input">
      <input
        type="text"
        className={`search-input ${className ? className : ""}`}
        style={style ? style : {}}
      />
    </div>
  );
};

export default SearchInput;
