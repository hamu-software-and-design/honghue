/**
 * @file Home page component for HongHue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'
import {Carousel} from 'reactstrap'
import Snippet from './Snippet.js'
import Gallery from '../Gallery/Index.js'

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
                    <h1 className="cursive font-size-xlg">Beauty never goes out of fashion.</h1>
                    <h2 className="cursive">Cosmetics created and produced by Le Dieu Han.</h2>
                    <h2 className="cursive text-muted">#honghue</h2>
                  </blockquote>
                </div>
                <div className="col-md-6 col-sm-12">
                  <Gallery />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/**
<div id="home-2" className="carousel slide w-100" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#home-2" data-slide-to="0" className="active grey"></li>
    <li data-target="#home-2" data-slide-to="1" className="grey"></li>
  </ol>
  <div className="carousel-inner w-100" role="list-box">
    <div className="carousel-item active w-100 justify-content-center">
      <div className="row w-100 h-vh-40">
        <div id="item-1" className="col-6"></div>
        <div className="d-flex col-6 align-items-center align-items-center">
          <h1 className="cursive font-weight-bold text-red">Openning 5/6/17</h1>
        </div>
      </div>
    </div>
    <div className="carousel-item w-100 justify-content-center">
      <div className="row w-100 h-vh-40">
        <div className="col-6"></div>
        <div className="col-6"></div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" role="button" data-slide="prev" href="#home-2">
    <i className="material-icons text-black" aria-hidden="true">keyboard_arrow_left</i>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" role="button" data-slide="next" href="#home-2">
    <i className="material-icons text-black" aria-hidden="true">keyboard_arrow_right</i>
    <span className="sr-only">Next</span>
  </a>
</div>
*/
