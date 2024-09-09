mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 10, // starting zoom
});

// console.log(listing.geometry.coordinates);

// const marker = new mapboxgl.Marker({ color: "red" })
//   .setLngLat(listing.geometry.coordinates)
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 }).setHTML(
//       `<h4>${listing.location}</h4><p>Exact Location will be provided after booking done!</p>`
//     )
//   )
//   .addTo(map);

map.on("load", () => {
  map.loadImage(
    "https://res.cloudinary.com/dilnunow1/image/upload/v1725534517/AirbnbLogo_lxk0kg.png",
    (error, image) => {
      if (error) throw error;

      map.addImage("logo", image);

      map.addSource("point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: listing.geometry.coordinates,
              },
              properties: {
                title: listing.location,
              },
            },
          ],
        },
      });

      map.addLayer({
        id: "points",
        type: "symbol",
        source: "point",
        layout: {
          "icon-image": "logo",
          "icon-size": 0.15,
          "text-field": "{title}",
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-size": 12,
          "text-offset": [0, 2.5],
          "text-anchor": "top",
        },
      });

      // Popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listing.location}</h4><p>Exact Location will be provided after booking done!</p>`
      );

      map.on("click", "points", (e) => {
        popup.setLngLat(e.lngLat).addTo(map);
      });
    }
  );
});
