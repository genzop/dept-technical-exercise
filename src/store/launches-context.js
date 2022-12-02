import React, { createContext, useState } from "react";

const LaunchesContext = createContext({
  section: "",
  filter: "",
  list: [],
  updateSection: (value) => {},
  updateFilter: (value) => {},
  updateList: (value) => {},
  toggleFavourite: (value) => {},
});

export function LaunchesContextProvider(props) {
  // State
  const [section, setSection] = useState("all");
  const [filter, setFilter] = useState("");
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
  };

  const toggleFavourite = (value) => {
    let saved = localStorage.getItem("favourites");
    saved = !saved ? [] : JSON.parse(saved);

    const favouriteIndex = saved.indexOf(value.flight_number);
    if (favouriteIndex > -1) {
      saved.splice(favouriteIndex, 1);
    }

    if (!value.favourite) {
      saved.push(value.flight_number);
    }

    localStorage.setItem("favourites", JSON.stringify(saved));

    let nList = [...list];
    const index = nList.indexOf(value);
    nList[index].favourite = !nList[index].favourite;
    setList(nList);
  };

  const context = {
    section: section,
    filter: filter,
    list: list,
    updateSection: updateSection,
    updateFilter: updateFilter,
    updateList: updateList,
    toggleFavourite: toggleFavourite,
  };

  return (
    <LaunchesContext.Provider value={context}>
      {props.children}
    </LaunchesContext.Provider>
  );
}

export default LaunchesContext;
