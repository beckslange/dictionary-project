import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
//every time I type something into the search bar React
//uses every function and returns my form. So, if I were
//to use my {keyword} component underneath </form> and
//above and outside <Results /> then every time I typed
//into the search bar, whatever I typed would be rerendered
//and shown underneath the bar. That is react

//blue Results is the file Results.js
//green results is a property component that is going to
//use useState to change the definition every time
//purple {results} is my results state, or my property
//value, aka the null in the const[results, setResults]
