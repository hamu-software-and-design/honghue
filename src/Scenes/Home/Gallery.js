/**
 * @file Gallery component for Hong Hue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'

/**
 * @class
 * @extends {React.Component}
 * Gallery component
 */
export default class Gallery extends React.Component {
  /**
   * Renders the react element
   * @method
   * @memberof Gallery
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className="row gallery">
        <div className="col-6">
          <a style={{ backgroundImage: 'url("/img/gallery/1.jpg")'}} className="square-responsive img-thumbnail bg-cover-default">
          </a>
        </div>
        <div className="col-6">
          <div style={{ backgroundImage: 'url("/img/gallery/2.jpg")'}} className="h-150px w-150px img-thumbnail bg-cover-default"></div>
        </div>
      </div>
    )
  }
}
