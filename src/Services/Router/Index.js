import React from 'react'
import {ConnectedRouter} from 'react-router-redux'
import * as RouterTypes from './flowtypes.js'
import LocaleProvider from '../Locale/Index.js'
import UIContainer from '../../Scenes/UIContainer.js'

type PropTypes = {
  history: RouterTypes.HistoryType
}

/**
 * @class
 * @extends {React.Component}
 * The app router.
 */
export default class Router extends React.Component<void,PropTypes,void> {
  /**
   * Renders the react elements.
   * @memberof Router
   * @method
   * @returns {ReactElement}
   */
  render() {
    const {history} = this.props
    return (
      <ConnectedRouter history={history}>
        <LocaleProvider>
          <UIContainer />
        </LocaleProvider>
      </ConnectedRouter>
    )
  }
}
