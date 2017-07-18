import React from 'react'
import MainNav from './Navbar/Index.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../Styles/index.scss'

/**
 * @class
 * @extends {React.Component}
 * UI container
 */
export default class UIContainer extends React.Component {
  /**
   * @method
   * @memberof App
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <MainNav />
        <div className="container">
          <div id="mainbanner" className="justify-content-center row h-vh-80">
            <object id="logo" type="image/svg+xml" data="./img/honghue-logo.svg"></object>
          </div>
        </div>
      </div>
    )
  }
}
