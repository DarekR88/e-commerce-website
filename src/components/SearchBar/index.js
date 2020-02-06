import React, { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input)
  }
  return (
  <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={input} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  </div>
  )
}

export default SearchBar;
