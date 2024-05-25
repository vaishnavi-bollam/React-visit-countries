import React from 'react'

class CountryItem extends React.Component {
  handleVisitClick = () => {
    const {country, onVisit} = this.props
    onVisit(country.id)
  }

  render() {
    const {country} = this.props
    return (
      <li className="country-item">
        <img src={country.imageUrl} alt="thumbnail" className="country-image" />
        <p className="country-name">{country.name}</p>
        {country.isVisited ? (
          <p className="visited-text">Visited</p>
        ) : (
          <button
            type="button"
            className="visit-button"
            onClick={this.handleVisitClick}
          >
            Visit
          </button>
        )}
      </li>
    )
  }
}

export default CountryItem
