import React, { Component } from 'react'
import './churchCard.css'

class ChurchCard extends Component {
  constructor(props) {
    super(props)

    this.getSchedule = this.getSchedule.bind(this)
    this.getImages = this.getImages.bind(this)
    // this.getResearcher = this.getResearcher.bind(this)
  }

  getSchedule(schedule = []) {
    return schedule.map((worship) => {
      const { id, day, hour, title } = worship
      const name = title === undefined ? '' : `${title} |`
      return (
        <div key={id}>
          <p>{`${name} ${day}: ${hour}`}</p>
        </div>
      )
    })
  }

  getImages(images = [], name) {
    return images.map((image) => {
      const { id, path, caption = '' } = image
      return (
        <div key={id}>
          <img className="image" src={path} alt={name} />
          <div>{caption}</div>
        </div>
      )
    })
  }

  // getResearcher(researchers, churchId) {
  //   return researchers.map((researcher) => {
  //     const { responsableFor } = researcher
  //     responsableFor
  //   })
  // }

  componentDidMount() {

  }

  render() {
    const { church, researchers } = this.props
    const { id, name, schedule, images, address = {} } = church
    const { region, street, number } = address

    if (region === undefined) return <p>{''}</p>
    return (
      <div className="container">
        <h3>{name}</h3>
        <div className="images-container">
          {this.getImages(images, name)}
        </div>
        {this.getSchedule(schedule)}
        {/* {this.getResearcher(researchers, id)} */}
        <div className="address">{`${region} | ${street}, nº${number}`}</div>
      </div>
    )
  }
}

export default ChurchCard
