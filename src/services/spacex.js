import axios from "axios";

const getLaunchesRaw = async () => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/launches");
    return response.data;
  } catch (error) {
    console.log("SpaceX service error", error);
    return [];
  }
};

const getRocketsRaw = async () => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");
    return response.data;
  } catch (error) {
    console.log("SpaceX service error", error);
    return {};
  }
};

export const getLaunches = async () => {
  const rocketsRaw = await getRocketsRaw();
  const launchesRaw = await getLaunchesRaw();

  const rockets = {};
  const launches = [];

  for (let i = 0; i < rocketsRaw.length; i++) {
    const rocket = rocketsRaw[i];
    rockets[rocket.rocket_id] = rocket;
  }

  for (let i = 0; i < launchesRaw.length; i++) {
    const launch = launchesRaw[i];
    const rocket = rockets[launch.rocket.rocket_id];

    const temp = {
      flight_number: launch.flight_number,
      mission_name: launch.mission_name,
      launch_date_unix: launch.launch_date_unix,
      details: launch.details,
      mission_patch: launch.links.mission_patch,
      rocket: {
        rocket_id: rocket.rocket_id,
        rocket_name: rocket.rocket_name,
        active: rocket.active,
        cost_per_launch: rocket.cost_per_launch,
        company: rocket.company,
      },
    };

    launches.push(temp);
  }

  return launches;
};
