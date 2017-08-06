/**
 * @file Footer for Honghue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'
import {Button} from 'reactstrap'

/**
 * @class
 * @extends {React.Component}
 * Footer for the website.
 */
export default class Footer extends React.Component {
  /**
   * Renders the react element.
   * @method
   * @memberof Footer
   * @returns {React.Element}
   */
  render() {
    return (
      <div className="">
        <div className="container">
          <div className="row m-v-30px">
            <div className="col-6">
              <h5 className="font-quicksand">Hong Hue</h5>
              <h6>Cosmetics Store</h6>
              <div>
                <a className="btn btn-secondary" href="https://www.facebook.com/honghue.comestics/"><i className="fa fa-facebook"></i></a>
                <Button color="secondary"><i className="fa fa-twitter"></i></Button>
              </div>
            </div>
            <div className="col-6">
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
            </div>
          </div>
          <h6 className="text-center font-quicksand text-muted p-v-30px">2017 Design by Hamu Software & Design. All rights reserved.</h6>
        </div>
      </div>
    )
  }
}
