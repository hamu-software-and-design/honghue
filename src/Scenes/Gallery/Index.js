/**
 * @file Gallery component for Hong Hue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'
import GalleryItem from './GalleryItem.js'

type PropTypes = {
  children?: React.Children,
  className: string
}
type DefaultPropTypes = {
  className: string
}

/**
 * @class
 * @extends {React.Component}
 * Gallery component
 */
export default class Gallery extends React.Component<DefaultPropTypes, PropTypes, void> {
  static defaultProps = {
    className: ''
  }
  /**
   * Item component for Gallery.
   * @memberof Gallery
   */
  static get Item() {
    return GalleryItem
  }
  /**
   * Renders the react element
   * @method
   * @memberof Gallery
   * @returns {ReactElement}
   */
  render() {
    const {children, className} = this.props
    return (
      <div className={"gallery " + className}>
        <div className="container-fluid">
          <div className="row">
            { children }
          </div>
        </div>
      </div>
    )
  }
}
