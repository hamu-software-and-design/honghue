/**
 * @file Container for modal apps
 * @author Kai Matsuda
 * @version 0.0.1
 * @flow
 */
import React from 'react'
import {Modal, ModalBody} from 'reactstrap'
import ModalTrigger from './ModalTrigger.js'

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
 * Container for modal apps
 */
export default class ModalApp extends React.Component<DefaultPropTypes, PropTypes, StateTypes> {
  static defaultProps = {
    className: '',
    style: {}
  }
  state = {
    modal: false
  }

  static get Body() {
    return ModalBody
  }

  static get Trigger() {
    return ModalTrigger
  }

  /**
   * Toggles view.
   * @method
   * @memberof ModalApp
   */
  toggle() {
    this.setState({ modal: !this.state.modal })
  }
  /**
   * Renders the react element
   * @method
   * @memberof ModalApp
   */
  render() {
    const {style, className, children} = this.props
    const {modal} = this.state
    const kids = React.Children.toArray(children)
    const trigger = kids.find(child => (child.type === ModalTrigger))
    const body = kids.find(child => (child.type === ModalBody))
    const subscribed_trigger = React.cloneElement(trigger, { toggle: this.toggle.bind(this)})
    return (
      <div className={className}>
        {subscribed_trigger}
        <Modal isOpen={modal} toggle={() => this.toggle()}>
          {body}
        </Modal>
      </div>
    )
  }
}
