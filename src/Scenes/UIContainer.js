import React from 'react'
import MainNav from './Navbar/Index.js'
import Home from './Home/Index.js'
import Footer from './Footer/Index.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../Styles/index.scss'

type PropTypes = {
  children?: React.Children
}

/**
 * @class
 * @extends {React.Component}
 * UI container
 */
export default class UIContainer extends React.Component<void, PropTypes, void> {
  /**
   * @method
   * @memberof App
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <MainNav />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
