// VisitedCountryItem.js
import {Component} from 'react'

class VisitedCountryItem extends Component {
  handleRemoveClick = () => {
    const {country, onRemove} = this.props
    onRemove(country.id)
  }

  render() {
    const {imageUrl, name} = this.props
    return (
      <li className="visited-country-item">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <p className="country-name">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={this.handleRemoveClick}
        >
          Remove
        </button>
      </li>
    )
  }
}

export default VisitedCountryItem
