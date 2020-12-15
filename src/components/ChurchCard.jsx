import React, { Component } from 'react'
import './churchCard.css'
import { connect } from 'react-redux'

class ChurchCard extends Component {
  constructor(props) {
    super(props)

    this.getSchedule = this.getSchedule.bind(this)
    this.getImages = this.getImages.bind(this)
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

  getResearcher(researchers, churchId) {
    return researchers.map((researcher) => {
      const { responsableFor, firstName, surname, id } = researcher
      const isTheChurchIncluded = responsableFor.includes(churchId)
      if (isTheChurchIncluded) return <p key={id}>{`Pesquisador: ${firstName} ${surname}`}</p>
      return ''
    })
  }

  getDate({ fieldResearch, analysis }) {
    return (
      <div>
        <p>{`Pesquisado em: ${fieldResearch}`}</p>
        <p>{`Analizado em: ${analysis}`}</p>
      </div>
    )
  }

  render() {
    const { church } = this.props
    const { researchers } = this.props.churches
    const { id, name, schedule, images, address = {}, date = {} } = church
    const { region, street, number } = address

    if (region === undefined) return <p>{''}</p>
    return (
      <div className="container">
        <h3>{name}</h3>
        <div className="images-container">
          {this.getImages(images, name)}
        </div>
        {this.getSchedule(schedule)}
        {this.getResearcher(researchers, id)}
        {this.getDate(date)}
        <div className="address">{`${region} | ${street}, nº${number}`}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { churches } = state
  return { churches }
}

export default connect (mapStateToProps)(ChurchCard)
