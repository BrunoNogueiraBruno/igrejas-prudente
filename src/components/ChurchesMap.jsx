import React from 'react';
import { Map, Marker } from 'pigeon-maps';
import churchesIndex from '../data';

class ChurchesMap extends React.Component {
  constructor(props) {
    super(props);
    this.getChurchLocations = this.getChurchLocations.bind(this);
  }
  getChurchLocations() {
    return (
      churchesIndex.churches.map((church) => {
        return <Marker key={church.id} anchor={church.location} />;
      })
    )
  }

  render() {
    return (
      <Map
        defaultCenter={[-22.1242, -51.4095]}
        defaultZoom={13}
        width={window.screen.width}
        height={(window.screen.height)}
      >
        {this.getChurchLocations()}
      </Map>
    );
  }
}

export default ChurchesMap;
