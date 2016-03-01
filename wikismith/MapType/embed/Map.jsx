import React from 'react';
import ReactDOM from 'react-dom';
import ReactDomServer from 'react-dom/server';
import GoogleMaps from '../google-map-utils';
import google from 'google';
import styles from './Map.scss';

const propTypes = {
  content: React.PropTypes.object,
  wikismith: React.PropTypes.object
};

const childContextTypes = {
  wikismith: React.PropTypes.object
};

class Map extends React.Component {

  constructor(props) {
    super(props);
    const lat = 39.8282;
    const lng = -98.5795;
    const zoom = 4;
    this.state = { lat, lng, zoom, markers: {} };
    this.mapElements = this.mapElements.bind(this);
    this.mapReference = this.mapReference.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.createMap = this.createMap.bind(this);
  }

  getChildContext() {
    return { wikismith: this.props.wikismith };
  }

  componentDidMount() {
    const head = document.getElementsByTagName('head')[0];
    const insertBefore = head.insertBefore;
    head.insertBefore = (newElement, referenceElement) => {
      if (newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
        console.info('Prevented Roboto from loading!');
        return;
      }
      insertBefore.call(head, newElement, referenceElement);
    };
    GoogleMaps.load({}, this.createMap);
  }

  mapReference(reference, content) {
    const geocoder = new google.maps.Geocoder();
    let location = null;
    if (content.latitude && content.longitude) {
      location = { lat: content.latitude, lng: content.longitude };
      this.addMarker(reference, content, location);
    } else if (content.address) {
      geocoder.geocode({ address: content.address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log('Geocode Success');
          const gLocation = results[0].geometry.location;
          location = { lat: gLocation.lat(),
                       lng: gLocation.lng() };
          this.addMarker(reference, content, location);
        } else {
          location = null;
          console.log(`Unable to geocode address ${content.address}.  Status: ${status}`);
        }
      });
    }
  }

  mapElements() {
    const references = this.props.wikismith.wikiReferences(this.props.content);
    for (const reference of references) {
      const content = this.props.wikismith.findBySlug(reference.slug);
      this.mapReference(reference, content);
    }
  }

  markerValues(markers) {
    const results = [];
    for (const key in markers) {
      if (markers[key]) {
        results.push(markers[key]);
      }
    }
    return results;
  }

  createMap() {
    const node = ReactDOM.findDOMNode(this);
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(node, {
      center: new google.maps.LatLng(this.state.lat, this.state.lng),
      zoom: this.state.zoom
    });
    this.setState({
      isMapCreated: true
    });
    this.mapElements();
  }

  addMarker(reference, content, location) {
    const markers = this.state.markers;
    const point = new google.maps.LatLng(location.lat, location.lng);
    this.bounds.extend(point);
    this.map.fitBounds(this.bounds);
    markers[reference.slug] = { reference, content, location };
    this.setState({ markers });
    const marker = new google.maps.Marker({
      position: point,
      map: this.map,
      title: content.title
    });
    const referenceComponent = this.props.wikismith.reference(content, reference.method);
    const infowindow = new google.maps.InfoWindow({
      content: ReactDomServer.renderToStaticMarkup(referenceComponent)
    });
    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });
  }

  render() {
    return (
      <div className={styles.map}>
      </div>
    );
  }
}

Map.propTypes = propTypes;
Map.childContextTypes = childContextTypes;
module.exports = Map;
