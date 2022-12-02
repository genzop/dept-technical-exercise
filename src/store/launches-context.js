import React, { createContext, useState } from "react";

const LaunchesContext = createContext({
  section: "",
  filter: "",
  total: 0,
  list: [],
  updateSection: (value) => {},
  updateFilter: (value) => {},
  updateList: (value) => {},
  isFavourite: (flightNumber) => {},
  toggleFavourite: (flightNumber, isFavourite) => {},
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

  const isFavourite = (flightNumber) => {
    let saved = localStorage.getItem("favourites");
    saved = !saved ? [] : JSON.parse(saved);

    const index = saved.indexOf(flightNumber);
    if (index > -1) {
      return true;
    }

    return false;
  };

  const toggleFavourite = (flightNumber, isFavourite) => {
    let saved = localStorage.getItem("favourites");
    saved = !saved ? [] : JSON.parse(saved);

    const index = saved.indexOf(flightNumber);
    if (index > -1) {
      saved.splice(index, 1);
    }

    if (isFavourite) {
      saved.push(flightNumber);
    }

    localStorage.setItem("favourites", JSON.stringify(saved));
  };

  const context = {
    section: section,
    filter: filter,
    total: total,
    list: list,
    updateSection: updateSection,
    updateFilter: updateFilter,
    updateList: updateList,
    isFavourite: isFavourite,
    toggleFavourite: toggleFavourite,
  };

  return (
    <LaunchesContext.Provider value={context}>
      {props.children}
    </LaunchesContext.Provider>
  );
}

export default LaunchesContext;
