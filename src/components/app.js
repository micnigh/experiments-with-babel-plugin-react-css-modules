/**
 * @file Demonstrates runtime "styleName" resolution.
 * @see https://github.com/gajus/babel-plugin-react-css-modules#runtime-stylename-resolution
 */

import React from 'react';
import './app.scss';

export default () => {
  return (
  <div>
    <div styleName='table'>
      <div styleName='row'>
        <div styleName={'cell'}>A0</div>
        <div styleName={'cell'}>B0</div>
        <div styleName={'cell'}>C0</div>
      </div>
      <div styleName='row'>
        <div styleName={'cell'}>A1</div>
        <div styleName={'cell'}>B1</div>
        <div styleName={'cell'}>C1</div>
      </div>
      <div styleName='row'>
        <div styleName={'cell'}>A2</div>
        <div styleName={'cell'}>B2</div>
        <div styleName={'cell'}>C2</div>
      </div>
    </div>
    <div styleName="title">
      <span>This is in a title container</span>
      <br/>
      <span styleName="nested-title">And this is nested-title</span>
    </div>
  </div>
)};
