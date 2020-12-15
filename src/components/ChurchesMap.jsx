import React, { Component } from 'react'
import { Map, Marker } from 'pigeon-maps'
import { connect } from 'react-redux'
import ChurchCard from './ChurchCard'

class ChurchesMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedChurch: {},
      windowHeight: (window.screen.height),
      windowWidth: window.screen.width,
    }

    this.onClickMarker = this.onClickMarker.bind(this)
    this.getMarkers = this.getMarkers.bind(this)
  }

  onClickMarker(selectedChurch) {
    this.setState({
      selectedChurch,
      windowHeight: (window.screen.height) * 0.5,
    })
  }
  getMarkers() {
    const { churches } = this.props.churches
    return churches.map((church) => {
      return (
        <Marker
          key={church.id}
          anchor={church.location}
          onClick={() => {this.onClickMarker(church)}}
        />
      )
    })
  }

  onClickMap() {
    this.setState({
      selectedChurch: {},
      windowHeight: (window.screen.height) * 1,
    })
  }

  render() {
    return (
      <div>
        <Map
          defaultCenter={[-22.12, -51.407]}
          defaultZoom={13}
          width={this.state.windowWidth}
          height={this.state.windowHeight}
          onClick={() => this.onClickMap()}
        >
          {this.getMarkers()}
        </Map>
        <ChurchCard church={this.state.selectedChurch} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { churches } = state
  return { churches }
}

export default connect (mapStateToProps)(ChurchesMap)
