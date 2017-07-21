/**
 * @file ModalItem component for Hong Hue
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'
import {Modal, ModalBody} from 'reactstrap'

type PropTypes = {
  className: string,
  children?: React.Children,
  style?: {}
}
type DefaultPropTypes = {
  className: string,
  style: {}
}
type StateTypes = {
  modal: boolean
}

/**
 * @class
 * @extends {React.Component}
 * Modal Item for the Gallery
 */
export default class ModalItem extends React.Component<DefaultPropTypes, PropTypes, StateTypes> {
  static defaultProps = {
    className: '',
    style: {}
  }
  state = {
    modal: false
  }

  /**
   * Toggles view.
   * @method
   * @memberof ModalItem
   */
  toggle() {
    console.log('toggle')
    this.setState({ modal: !this.state.modal })
  }
  /**
   * Renders the react element
   * @method
   * @memberof ModalItem
   */
  render() {
    const {style, className, children} = this.props
    const {modal} = this.state
    return (
      <div>
        <a style={style} className={'cursor-pointer ' + className} onClick={() =>  this.toggle()}>
        </a>
        <Modal isOpen={modal} toggle={() => this.toggle()}>
          <ModalBody>
            {children}
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
