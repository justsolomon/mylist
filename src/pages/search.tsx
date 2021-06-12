import React from "react";
import SEO from "../components/global/SEO";
import SearchModal from "../components/search/SearchModal";

function SearchPage() {
  return (
    <>
      <SEO prefix="Search" path="/search" />
      <SearchModal />
    </>
  );
}

export default SearchPage;
