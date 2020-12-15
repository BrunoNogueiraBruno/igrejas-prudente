import React, { Component } from 'react'
import { Map, Marker } from 'pigeon-maps'
import { connect } from 'react-redux'
import ChurchCard from './ChurchCard'

class ChurchesMap extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedChurch: {} }

    this.onClickMarker = this.onClickMarker.bind(this)
    this.getMarkers = this.getMarkers.bind(this)
  }

  onClickMarker(selectedChurch) {
    this.setState({ selectedChurch })
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
  render() {
    return (
      <div>
        <Map defaultCenter={[-22.118707689931316, -51.38796816527416]} defaultZoom={13} width={600} height={400}>
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
