import Base from './base';
import React, {PureComponent, PropTypes, createElement} from 'react';
import classNames from 'classnames';

export default class extends Base {
  static propTypes = {
    wrap: PropTypes.bool
  };

  layout = 'row';

  render() {
    let {align, nodeName, className, wrap, ...props} = this.props;
    const layout = this.layout;
    const layoutAlign = align ? `${layout}-${align}` : '';
    const wrapCls = wrap ? 'row-wrap' : '';
    Object.assign(props, {
      className: classNames(layout,layoutAlign,wrapCls,className)
    });
    return createElement(nodeName, props);
  }
}
