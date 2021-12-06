import React, { useState, useEffect } from "react";
import Autocomplete from "react-autocomplete";
import axios from "axios";
import "./Search.css";
const Search = ({ setData }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleInputValue = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://swapi.dev/api/people/?search=${query}`
      );
      setSuggestions(data.results);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  const handleOnSelect = (val, item) => {
    setQuery(val);
    setData(item);
  };
  useEffect(() => {
    if (query.length) {
      fetchData();
    }
  }, [query]);
  return (
    <main className="input-wrapper">
      <Autocomplete
        getItemValue={(item) => item.name}
        items={suggestions}
        renderItem={(item, isHighlighted) => (
          <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
            {item.name}
          </div>
        )}
        value={query}
        onChange={(e) => handleInputValue(e)}
        onSelect={(value, item) => handleOnSelect(value, item)}
        inputProps={{
          className: "input-style",
          placeholder: "Click here and search!",
        }}
      />
    </main>
  );
};

export default Search;
