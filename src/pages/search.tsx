import React from "react";
import SEO from "../components/global/SEO";
import SearchContainer from "../containers/Search";

function SearchPage() {
  return (
    <>
      <SEO prefix="Search" path="/search" />
      <SearchContainer />
    </>
  );
}

export default SearchPage;
