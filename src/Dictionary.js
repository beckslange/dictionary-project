import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function search(event) {
    alert(`Searching for ${keyword}`);
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus onChange={handleKeywordChange} />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
