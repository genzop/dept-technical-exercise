import React, { useEffect } from "react";

import { getLaunches } from "./../services/spacex";

const HomePage = () => {
  useEffect(() => {
    async function getData() {
      const launches = await getLaunches();
      console.log(launches);
    }

    getData();
  }, []);

  return <div>Home Page</div>;
};

export default HomePage;
