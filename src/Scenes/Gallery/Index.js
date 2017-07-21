/**
 * @file Gallery component for Hong Hue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'
import ModalItem from './ModalItem.js'

/**
 * @class
 * @extends {React.Component}
 * Gallery component
 */
export default class Gallery extends React.Component {
  /**
   * Renders each item in the gallery.
   * @method
   * @returns {ReactElement}
   */
  renderItem(image: string) {
    return (
      <div key={'gallery-'+image} className="hvr-darken m-v-15px col-4 col-md-6 col-lg-4">
        <ModalItem style={{ backgroundImage: 'url("'+image+'")'}} className="square-responsive img-thumbnail bg-cover-default">
          <img className="modal-img" src={image} />
        </ModalItem>
      </div>
    )
  }
  /**
   * Renders the react element
   * @method
   * @memberof Gallery
   * @returns {ReactElement}
   */
  render() {
    const items = ['/img/gallery/1.jpg', '/img/gallery/2.jpg', '/img/gallery/3.jpg', '/img/gallery/4.jpg', '/img/gallery/5.jpg', '/img/gallery/6.jpg']
    return (
      <div className="gallery">
        <div className="row">
          {
            items.map((url) => {
              return this.renderItem(url)
            })
          }
        </div>
      </div>
    )
  }
}
