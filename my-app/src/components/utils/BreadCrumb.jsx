import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({head , link}) => {
  return (
    <div>
              {/* Breadcrumb Section  */}
      <div
        className="breadcrumb-section bg-img jarallax"
          style={{backgroundImage:"url(/97.jpg)"}}>
      
        <div className="container">
          {/* Breadcrumb Content */}
          <div className="breadcrumb-content">
            <div className="divider"></div>
            <h2>{head}</h2>
            <ul className="list-unstyled">
              <li>
                <Link to="/">{link}</Link>
              </li>
              <li>{head}</li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </div>
  )
}

export default BreadCrumb