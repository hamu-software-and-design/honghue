import React from 'react'
import MainNav from './Navbar/Index.js'
import Home from './Home/Index.js'
import Footer from './Footer/Index.js'
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
        <Home />
        <Footer />
      </div>
    )
  }
}
