import './index.css'

const PasswordList = props => {
  const {eachUserDetails, deleteDetails, isToggle} = props
  const {id, websiteName, userName, userPassword} = eachUserDetails
  const firstLetter = websiteName[0].toUpperCase()
  const onClickDelete = () => {
    deleteDetails(id)
  }

  return (
    <li className="list">
      <p className="first-letter">{firstLetter}</p>
      <div className="details-list">
        <p className="web">{websiteName}</p>
        <p className="name">{userName}</p>
        {isToggle ? (
          <p className="pass">{userPassword}</p>
        ) : (
          <img
            alt="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            className="start-img"
          />
        )}
      </div>
      <button
        data-testid="delete"
        onClick={onClickDelete}
        className="delete"
        type="button"
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default PasswordList
