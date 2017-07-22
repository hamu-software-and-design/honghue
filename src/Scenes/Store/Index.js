/**
 * @file Store page component for HongHue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'
import {FormattedNumber} from 'react-intl'
import Carousel from '../Carousel/Index.js'
import ModalApp from '../ModalApp/Index.js'
import Gallery from '../Gallery/Index.js'
import data from './gallery_data.json'

/**
 * @class
 * @extends {React.Component}
 * Store Page
 */
export default class Store extends React.Component {
  /**
   * Renders the React Element.
   * @method
   * @memberof Store
   * @returns {ReactElement}
   */
  render() {
    const store_content = new Array(6).fill('').map((_,i) => '/img/store/'+(i+1)+'.jpg')
    return (
      <div>
        <Carousel id="promo-carousel" withControls withIndicators>
          <Carousel.Item active>
            <div style={{backgroundImage: 'url("/img/promos/openning.jpg")'}} className="w-100 h-300px bg-cover-default d-flex align-items-center filter-greyscale">
              <div className="container">
                <h1 className="font-quicksand text-white">Openning 5/6/17</h1>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{backgroundImage: 'url("/img/promos/cake.jpg")'}} className="w-100 h-300px bg-cover-default d-flex align-items-center">
              <div className="container">
                <h1 className="font-quicksand text-white">Example promo.</h1>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="black d-flex align-items-center justify-content-center p-30px m-30px">
          <object id="logo" className="h-80px stroke-black" type="image/svg+xml" data="./img/honghue-logo.svg"></object>
        </div>
        <Gallery className="light-grey">
          {
            data.map((item,i) => {
              return (
                <Gallery.Item className="col-12 col-md-6 col-lg-4" img={item.img} key={"gallery-store-"+i}>
                  <div className="card square-responsive relative">
                    <ModalApp>
                      <ModalApp.Trigger style={{ backgroundImage: 'url("'+item.img+'")'}} className="bg-cover-store hvr-darken absolute-top w-100"></ModalApp.Trigger>
                      <ModalApp.Body>
                        <img className="w-100" src={item.img} />
                      </ModalApp.Body>
                    </ModalApp>
                    <div className="absolute-bottom w-100 white p-15px d-flex align-items-center h-min-100px">
                      <div>
                        <h5>{item.name}</h5>
                        <h6 className="text-muted"><FormattedNumber value={item.price} /> đ</h6>
                      </div>
                    </div>
                  </div>
                </Gallery.Item>
              )
            })
          }
        </Gallery>
      </div>
    )
  }
}
