import React, {PropTypes, PureComponent, createElement} from 'react';

import Base from './base';
import {JUSTIFY} from './const';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class extends Base {
  static propTypes = {
    wrap: PropTypes.bool,
    justify: PropTypes.oneOf(JUSTIFY)
  };

  layout = 'row';

  render() {
    let {align, nodeName, className, wrap, justify, ...props} = this.props;
    const layout = this.layout;
    const layoutAlign = align ? `${layout}-${align}` : '';
    const wrapCls = wrap ? 'row-wrap' : '';
    const justifyContent = justify ?  `row-justify-${justify}` : '';
    objectAssign(props, {
      className: classNames(layout,layoutAlign,wrapCls,justifyContent,className)
    });
    return createElement(nodeName, props);
  }
}
