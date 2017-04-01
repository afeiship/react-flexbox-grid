import Base from './base';
import React, {PureComponent, PropTypes, createElement} from 'react';
import classNames from 'classnames';
import {GRID} from './const';

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
    Object.assign(props, {
      className: classNames(layout,layoutAlign, spanPercent, offsetPercent, className)
    });
    return createElement(nodeName, props);
  }
}
