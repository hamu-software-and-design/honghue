/**
 * @file Carousel item component for Bootstrap v4.
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'

type PropTypes = {
  active: boolean,
  children?: React.Children
}
type DefaultPropTypes = {
  active: boolean
}
/**
 * @class
 * @extends {React.Component}
 * Carousel item.
 */
export default class CarouselItem extends React.Component<DefaultPropTypes, PropTypes, void> {
  static defaultProps = {
    active: false
  }
  /**
   * Renders ReactElement
   * @method
   * @memberof CarouselItem
   * @returns {ReactElement}
   */
  render() {
    const {active, children} = this.props
    return (
      <div className={"carousel-item " + (active ? 'active' : '')}>
        {children}
      </div>
    )
  }
}
