import React, { PureComponent, createElement } from 'react';

import Base from './base';
import {GRID} from './const';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class extends Base {
  static propTypes = {
    span: PropTypes.oneOf(GRID),
    offset: PropTypes.oneOf(GRID)
  };

  layout = 'col';

  render() {
    let {align, nodeName, className, span, offset, ...props} = this.props;
    const layout = this.layout;
    const layoutAlign = align ? `${layout}-${align}` : '';
    const spanPercent = span ?  `col-${span}` : '';
    const offsetPercent = offset ?  `col-offset-${offset}` : '';
    objectAssign(props, {
      className: classNames(layout,layoutAlign, spanPercent, offsetPercent, className)
    });
    return createElement(nodeName, props);
  }
}
