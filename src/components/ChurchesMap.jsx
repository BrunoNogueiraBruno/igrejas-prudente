import React from 'react';
import { Map, Marker } from 'pigeon-maps';
import churchesIndex from '../data';

class ChurchesMap extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      church: {
        id: '',
        name: 'Igreja Lorem Ipsum',
        address: { street: '', number: 0, region: '' },
        location: [0, 0],
        images: {
          first: { path: '', caption: '' },
          second: { path: '', caption: '' },
        },
        schedule: {
          sunday: { hour: 0, title: '' },
          wednesday: { hour: 0, title: '' },
        },
        date: { fieldResearch: '', analysis: '' },
      },
    };

    this.onClickHandle = this.onClickHandle.bind(this);
    this.getChurchLocations = this.getChurchLocations.bind(this);
  };

  onClickHandle(church) {
    console.log(church);
    this.setState({ church });
  }

  getChurchLocations() {
    return (
      churchesIndex.churches.map((church) => {
        return (
          <Marker
            key={church.id}
            anchor={church.location}
            onClick={() => {this.onClickHandle(church)}}
          />
        );
      })
    )
  }

  render() {
    const churches = this.state.church;
    return (
      <div>
        <Map
          defaultCenter={[-22.1242, -51.4095]}
          defaultZoom={13}
          width={window.screen.width}
          height={(window.screen.height) / 2}
        >
          {this.getChurchLocations()}
        </Map>
        <div className="show-church">
          <h3>{churches.name}</h3>
          <img
            src={window.location.origin + churches.images.first.path}
            alt={churches.images.first.path}
          ></img>
        </div>
      </div>
    );
  }
}

export default ChurchesMap;
