AOS.init({
    duration: 700
});

mapboxgl.accessToken = "pk.eyJ1IjoiaGFha29uYnUiLCJhIjoiY2pxYjVsaXAxM2ljZTQzanlnb2dmaTExdCJ9.T0cGvSepETpr611Y1GID2A";

/* Map: This represents the map on the page. */
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 12.03,
    center: [10.4003, 63.4223]
});

// Studentersamfundet
var samfundetPopup = new mapboxgl.Popup({offset: 35})
    .setText('Studentersamfundet ligger i Elgesetergate, rett ved Elgeseter bro.');

var samfundet = document.createElement('div');
samfundet.id = 'samfundet';

new mapboxgl.Marker(samfundet)
    .setLngLat([10.395108, 63.422543])
    .setPopup(samfundetPopup)
    .addTo(map);


// Kontoret
var kontoretPopup = new mapboxgl.Popup({offset: 35})
    .setText('HC-Kontoret befinner seg ved inngangen til Realfagbygget.');

var kontoret = document.createElement('div');
kontoret.id = 'kontoret';

new mapboxgl.Marker(kontoret)
    .setLngLat([10.404856, 63.415776])
    .setPopup(kontoretPopup) // sets a popup on this marker
    .addTo(map);


// Kjellern
var kjellernPopup = new mapboxgl.Popup({offset: 35})
    .setText('Kjemikjellern er å finne på Moholt studentby.');

var kjellern = document.createElement('div');
kjellern.id = 'kjellern';

new mapboxgl.Marker(kjellern)
    .setLngLat([10.4333, 63.412])
    .setPopup(kjellernPopup)
    .addTo(map);
