/**
 * @file Modal trigger for modal apps
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

/**
 * @class
 * @extends {React.Component}
 * Modal trigger.
 */
export default class ModalTrigger extends React.Component<DefaultPropTypes, PropTypes, void> {
  static defaultProps = {
    className: '',
    style: {}
  }
  /**
   * Render react eleement.
   * @method
   * @memberof ModalTrigger
   * @returns {React.Component}
   */
   render() {
     const {className, style, toggle, children} = this.props
     return (
       <a className={"cursor-pointer " + className} style={style} onClick={() => toggle()}>
         {children}
       </a>
     )
   }
}
