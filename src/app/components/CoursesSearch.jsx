"use client";
import React, { useState } from "react";

const CoursesSearch = ({ setCourseData }) => {
  const [query, setQuery] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const filteredData = await fetch(
      `http://localhost:3000/api/database/search?query=${query}`
    );
    const responseData = await filteredData.json();
    console.log("responseData", responseData);
    setCourseData(responseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        type="text"
        placeholder="search courses..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default CoursesSearch;
