import React, { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");
  return 
  <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={input} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  </div>;
}

export default SearchBar;
