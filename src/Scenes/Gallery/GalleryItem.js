/**
 * @file Gallery item component for Hong Hue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'

type PropTypes = {
  img: string,
  className: string,
  children?: React.Children
}
type DefaultPropTypes = {
  className: string
}

/**
 * @class
 * @extends {React.Component}
 * Gallery item.
 */
export default class GalleryItem extends React.Component<DefaultPropTypes, PropTypes, void> {
  static defaultProps = {
    className: ''
  }
  /**
   * Renders react element.
   * @method
   * @memberof GalleryItem
   * @returns {ReactElement}
   */
  render() {
    const {img, className, children} = this.props
    return (
      <div className={"m-v-15px " + className}>
        {children}
      </div>
    )
  }
}

//  col-4 col-md-6 col-lg-4
