/**
 * @file Footer for Honghue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'

/**
 * @class
 * @extends {React.Component}
 * Footer for the website.
 */
export default class Footer extends React.Component {
  /**
   * Renders the react element.
   * @method
   * @memberof Footer
   * @returns {React.Element}
   */
  render() {
    return (
      <div id="footer">
        <div className="container">
          <h6 className="text-center text-muted">2017 Design by Hamu Software & Design. All rights reserved.</h6>
        </div>
      </div>
    )
  }
}
