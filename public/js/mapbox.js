/*  eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidW1hcmFoaDR1IiwiYSI6ImNsa29uOTJyeTAxbXkzc3BueGlqYXF1c2wifQ.14PQRpLyJLn2CDsrzfu81Q';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/umarahh4u/clkonr7zt003l01qxfx8a1t8y', // style URL
    // center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    scrollZoom: false,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
