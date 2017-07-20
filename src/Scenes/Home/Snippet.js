/**
 * @file Snippet component for the Homepage
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'

type PropTypes = {
  bg: string,
  className: string
}
type DefaultProps = {
  className: string
}

/**
 * @class
 * @extends {React.Component}
 * Containers for announcements/advertisements on the home page.
 */
export default class Snippet extends React.Component<DefaultProps, PropTypes, void> {
  static defaultProps = {
    className: ""
  }
  /**
   * Renders the React elements
   * @method
   * @returns {ReactElement}
   */
  render() {
    const {bg, className} = this.props
    const style = {backgroundImage: 'url('+bg+')'}
    return (
      <div className={"h-vh-50 h-min-250 row bg-cover-default " + className} style={style}>
        <div className="col-6"></div>
        <div className="col-6 d-flex padding-10px align-items-center align-items-center">
            <div className="snippet-container">
              <h1 className="text-center font-weight-bold font-size-xlg">Openning</h1>
              <h5 className="text-center">18/6/2017</h5>
            </div>
        </div>
      </div>
    )
  }
}
