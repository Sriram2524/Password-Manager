import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordList from '../PasswordList'

import './index.css'

const initialUserDetails = []
class PasswordManager extends Component {
  state = {
    website: '',
    name: '',
    password: '',
    userDetails: initialUserDetails,
    searchInput: '',
    isToggle: false,
  }

  onWebsiteChange = event => {
    this.setState({website: event.target.value})
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onToggleChange = () => {
    this.setState(prevState => ({isToggle: !prevState.isToggle}))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, password, website} = this.state
    const newUserDetails = {
      id: uuidv4(),
      websiteName: website,
      userName: name,
      userPassword: password,
    }

    this.setState(prevState => ({
      userDetails: [...prevState.userDetails, newUserDetails],
      website: '',
      name: '',
      password: '',
    }))
  }

  deleteDetails = id => {
    const {userDetails} = this.state
    const deleteFilteredData = userDetails.filter(each => each.id !== id)
    this.setState({userDetails: deleteFilteredData})
  }

  render() {
    const {website, name, password, searchInput, isToggle} = this.state
    const {userDetails} = this.state
    const filteredDetails = userDetails.filter(each =>
      each.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const lenghtOfList = filteredDetails.length
    return (
      <div className="bg-container">
        <div className="logo-con">
          <img
            className="logo-img"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
        </div>
        <div className="add-user-details-con">
          <div className="add-user-card">
            <h1 className="add-password-name">Add New Password</h1>
            <form onSubmit={this.onSubmitForm} className="form">
              <div className="website-name-con">
                <img
                  className="web-site-img"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  onChange={this.onWebsiteChange}
                  type="text"
                  className="input"
                  value={website}
                  placeholder="Enter Website"
                />
              </div>
              <div className="website-name-con">
                <img
                  className="web-site-img"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  onChange={this.onNameChange}
                  type="text"
                  className="input"
                  value={name}
                  placeholder="Enter Username"
                />
              </div>
              <div className="website-name-con">
                <img
                  className="web-site-img"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  onChange={this.onPasswordChange}
                  type="password"
                  className="input"
                  value={password}
                  placeholder="Enter Password"
                />
              </div>
              <div className="button-con">
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="password-img-con">
            <img
              className="password-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="password-list-con">
          <div className="num-of-pass-input-con">
            <div className="name-num-con">
              <h1 className="your-password-name">Your Passwords</h1>
              <p className="num">{lenghtOfList}</p>
            </div>
            <div className="search-input-con">
              <img
                className="search-img"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                onChange={this.onSearchInputChange}
                value={searchInput}
                type="search"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>
          <hr className="horizental-line" />
          <div className="show-password-con">
            <input
              onClick={this.onToggleChange}
              value={isToggle}
              id="label"
              className="check"
              type="checkbox"
            />
            <label className="label" htmlFor="label">
              Show Passwords
            </label>
          </div>
          {lenghtOfList === 0 ? (
            <div className="no-password-con">
              <img
                className="empty-password-img"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="no-pass-name">No Passwords</p>
            </div>
          ) : (
            <ul className="unordered-list">
              {filteredDetails.map(each => (
                <PasswordList
                  isToggle={isToggle}
                  deleteDetails={this.deleteDetails}
                  eachUserDetails={each}
                  key={each.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
