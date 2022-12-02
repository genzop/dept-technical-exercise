# DEPT Technical Excercise

The exercise consists of building an application to view Spacex’s latest launches, and
being able to add them to a “favourite” list to revisit them later.
The application should be developed using React(16.8.4)/Angular/Vue.

## Wireframes

https://www.figma.com/file/QRhWGaLdAzle61hLRUFW3L/SpaceX?node-id=354%3A1

## Expectations

On the first app load the candidate should hit the following endpoints from SpaceX to
retrieve information about rockets and launches:

https://api.spacexdata.com/v3/rockets
https://api.spacexdata.com/v3/launches

Information about API usage can be found here:

https://docs.spacexdata.com

The candidate should combine the information to get a result similar to the following:

```
{
  flight_number: 39,
  mission_name: "NROL-76",
  launch_date_unix: 1493637300,
  details: "launch details",
  mission_patch: <image_URL>,
  rocket: {
    rocket_id: "falcon1",
    rocket_name: "Falcon 1",
    active: true,
    cost_per_launch: 6700000,
    company: "SpaceX"
  }
}
```

This is a list of functionality the candidate needs to include in the app order by priority,
there’s no need to do everything, let’s include as much as you can:

1. Fetch endpoints and merge arrays (we need to populate the rocket data of the
   launches with the rockets array)
2. Display launches
3. Favorite functionality (persist them on local storage)
4. Search by mission name
5. Inspect a specific launch detail
6. Pagination

## Algunas indicaciones

- Tenés 24hs para resolverlo.
- Debes enviar la solucion en un repo publico
- Tenes que tener hecho hasta el punto 4 inclusive.
