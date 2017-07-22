/**
 * @file Contact page component for HongHue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
 import React from 'react'
 import {Card, CardBlock, Button} from 'reactstrap'

/**
 * @class
 * @extends {React.Component}
 * Contact page.
 */
export default class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <div style={{ backgroundImage: 'url("/img/store_front.jpg")'}} className="p-v-30px w-100 bg-cover-default">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 d-flex align-items-center justify-content-center">
                <div className="justify-content-center">
                  <object id="logo" className="z-10" type="image/svg+xml" data="./img/honghue-logo.svg"></object>
                  <div className="h-100 d-flex justify-content-center">
                    <Button outline color="secondary m-right-30px w-min-100px"><i className="fa fa-facebook"></i></Button>
                    <Button outline color="secondary w-min-100px"><i className="fa fa-twitter"></i></Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center m-v-30px">
                <Card>
                  <CardBlock>
                    <i className="material-icons align-middle">phone</i>
                    <h6 className="font-quicksand">
                      312 456 2312
                    </h6>
                    <i className="material-icons align-middle">email</i>
                    <h6 className="font-quicksand">
                      honghue@gmail.com
                    </h6>
                    <i className="material-icons align-middle">location_on</i>
                    <h6 className="font-quicksand m-0">
                      Khu Đô Thị Vĩnh Điềm Trung 79A1, Nha Trang
                    </h6>
                  </CardBlock>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="black">
          <div className="container p-v-30px">
              <div className="h-vh-80 h-min-250">
                <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAb-VfrMWGC9exjUv0nqGieIkR6pRgNCck&q=12.257982,109.166662"
                      allowFullScreen>
                </iframe>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
