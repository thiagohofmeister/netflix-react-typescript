import React from 'react'
import './style.scss'

export const Header: React.FC<IHeaderProps> = ({ black }) => {
  return (
    <header className={`${black ? 'black' : ''}`}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </a>
      </div>

      <div className="header--user">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </a>
      </div>
    </header>
  )
}

interface IHeaderProps {
  black: boolean
}
