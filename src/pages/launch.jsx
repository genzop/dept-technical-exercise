import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const LaunchPage = () => {
  const params = useLoaderData();
  const launchId = params.launchId;

  return <div>Launch Page</div>;
};

export default LaunchPage;
