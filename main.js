import './style.css';
import { Feature, Map, View, Overlay } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';

const bgdCoord = [107.6186973186406, -6.89718146768146];

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    })
  ],
  view: new View({
    center: fromLonLat(bgdCoord),
    zoom: 12,
  })
});

function addMinimarketMark(tblminimarket) {
  const minimarketFeatures = tblminimarket.map(minimarket => new Feature({
    geometry: new Point(fromLonLat([minimarket.longitude, minimarket.latitude])), // Perbaiki kesalahan penulisan longitude
    nama: minimarket.nama, // Gunakan nama sesuai dengan database
  }));

  const vectorSource = new VectorSource({
    features: minimarketFeatures
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: 'pin.png',
        scale: 0.07,
      }),
    }),
  });

  map.addLayer(vectorLayer);
}

const overlay = new Overlay({
  element: document.createElement('div'),
  positioning: 'bottom-center',
  stopEvent: false,
  offset: [0, -50],
});

map.addOverlay(overlay);

map.on('click', function(evt) {
  const feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
    return feature;
  });

  if (feature) {
    const coordinates = feature.getGeometry().getCoordinates();
    const name = feature.get('nama'); // Pastikan menggunakan 'nama'
    overlay.setPosition(coordinates);
    const element = overlay.getElement();
    element.innerHTML = `<div class="ol-popup">${name}</div>`;
  } else {
    overlay.setPosition(undefined);
  }
});

fetch('http://localhost:3001/api/minimarket')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    addMinimarketMark(data);
  })
  .catch(error => {
    console.error('Failed to fetch Minimarket data:', error); // Perbaiki pesan kesalahan
  });
