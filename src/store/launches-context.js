import React, { createContext, useState } from "react";

const LaunchesContext = createContext({
  section: "",
  filter: "",
  total: 0,
  list: [],
  updateSection: (value) => {},
  updateFilter: (value) => {},
  updateList: (value) => {},
});

export function LaunchesContextProvider(props) {
  // State
  const [section, setSection] = useState("all");
  const [filter, setFilter] = useState("");
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);

  // Methods
  const updateSection = (value) => {
    setSection(value);
  };

  const updateFilter = (value) => {
    setFilter(value);
  };

  const updateList = (value) => {
    setList(value);
    setTotal(value.length);
  };

  const context = {
    section: section,
    filter: filter,
    total: total,
    list: list,
    updateSection: updateSection,
    updateFilter: updateFilter,
    updateList: updateList,
  };

  return (
    <LaunchesContext.Provider value={context}>
      {props.children}
    </LaunchesContext.Provider>
  );
}

export default LaunchesContext;
