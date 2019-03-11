import React from 'react'

class Navigation extends React.Component {

  render () {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="#" className="navbar-brand">Dashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Checks</a>
            </li>
          </ul>
        </div>
      </nav>
    )

  }
}

export default Navigation