import Base from './base';
import React, {PureComponent, PropTypes, createElement} from 'react';
import classNames from 'classnames';
import {JUSTIFY} from './const';

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
    Object.assign(props, {
      className: classNames(layout,layoutAlign,wrapCls,justifyContent,className)
    });
    return createElement(nodeName, props);
  }
}
