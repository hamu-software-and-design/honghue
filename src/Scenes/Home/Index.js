/**
 * @file Home page component for HongHue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'
import {Carousel} from 'reactstrap'
import {FormattedMessage} from 'react-intl'
import Snippet from './Snippet.js'
import Gallery from '../Gallery/Index.js'
import ModalApp from '../ModalApp/Index.js'

/**
 * @class
 * @extends {React.Component}
 * Home page component
 */
export default class HomePage extends React.Component {
  /**
   * Renders react elements.
   * @method
   * @memberof {HomePage}
   * @return {ReactElement}
   */
  render() {
    const galleryitems = ['/img/gallery/1.jpg', '/img/gallery/2.jpg', '/img/gallery/3.jpg', '/img/gallery/4.jpg', '/img/gallery/5.jpg', '/img/gallery/6.jpg']
    return (
      <div>
        <div className="container">
          <div id="mainbanner-container" >
            <div className="relative h-min-500 h-100">
              <object id="logo" className="absolute-center z-10" type="image/svg+xml" data="./img/honghue-logo.svg"></object>
              <div id="mainbanner" className="justify-content-center h-100">
              </div>
            </div>
          </div>
        </div>
        <div id="banner-2-container" className="card black">
          <div className="card-block text-white d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 align-items-center d-flex m-v-30px">
                  <blockquote>
                    <h1 className="font-quicksand"><FormattedMessage id="motto" /></h1>
                    <h2 className="font-quicksand"><FormattedMessage id="sub_motto" /></h2>
                    <h2 className="font-quicksand text-muted"><FormattedMessage id="hashtag" /></h2>
                  </blockquote>
                </div>
                <div className="col-md-6 col-sm-12">
                  <Gallery>
                    {
                      galleryitems.map((item, i) => {
                        return (
                          <Gallery.Item className="col-4 col-md-6 col-lg-4" img={item} key={"home-gallery-"+i}>
                            <ModalApp className="card square-responsive relative">
                              <ModalApp.Trigger style={{ backgroundImage: 'url("'+item+'")'}} className="bg-cover-default hvr-darken absolute-top w-100 h-100"></ModalApp.Trigger>
                              <ModalApp.Body>
                                <img className="w-100" src={item} />
                              </ModalApp.Body>
                            </ModalApp>
                          </Gallery.Item>
                        )
                      })
                    }
                  </Gallery>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
