import { Formik, useFormikContext } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import SearchModal from "../../components/search/SearchModal";
import search from "../../redux/search/searchService";

function SearchContainer() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values) => {
        dispatch(search(values.query));
      }}
    >
      <SearchModal
        search={(query: string) => {
          if (query.length > 2) dispatch(search(query));
        }}
      />
    </Formik>
  );
}

export default SearchContainer;
