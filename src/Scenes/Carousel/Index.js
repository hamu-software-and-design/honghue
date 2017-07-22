/**
 * @file Carousel component for Bootstrap v4. Patch up for Reactstrap that does not support carousels yet.
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'
import CarouselItem from './CarouselItem.js'

type PropTypes = {
  id: string,
  withControls: boolean,
  withIndicators: boolean,
  children?: React.Children
}
type DefaultPropTypes = {
  withControls: boolean,
  withIndicators: boolean
}

/**
 * @class
 * @extends {React.Component}
 * Carousel component for Bootstrap v4.
 */
export default class Carousel extends React.Component<DefaultPropTypes, PropTypes, void> {
  static defaultProps = {
    withControls: false,
    withIndicators: false
  }
  /**
   * Renders the controls for the carousel.
   * @method
   * @memberof Carousel
   * @returns {[ReactElement]}
   */
  renderControls() {
    const {id} = this.props
    return [
      (
        <a key={id+'-prev'} className="carousel-control-prev" href={'#'+id} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
      ),
      (
        <a key={id+'-next'} className="carousel-control-next" href={'#'+id} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      )
    ]
  }
  renderIndicators() {
    const {id, children} = this.props
    return (
      <ol className="carousel-indicators">
        {
          React.Children.map(children,(child, i) => {
            return (
              <li key={'indicator-'+id+'-'+i} data-target={'#'+id} data-slide-to={i} className="active grey"></li>
            )
          })
        }
      </ol>
    )
  }
  /**
   * @memberof Carousel
   * The carousel item.
   */
  static get Item() {
    return CarouselItem
  }
  /**
   * Renders the react element.
   * @method
   * @memberof Carousel
   * @returns {ReactElement}
   */
  render() {
    const {id, children, withControls, withIndicators} = this.props
    return (
      <div id={id} className="carousel slide" data-ride="carousel">
        {
          (withIndicators ? this.renderIndicators(): null)
        }
        <div className="carousel-inner" role="listbox">
          {children}
        </div>
        {
          (withControls ? this.renderControls(): null)
        }
      </div>
    )
  }
}
