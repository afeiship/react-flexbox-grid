import React, {PureComponent, PropTypes, createElement} from 'react';
import classNames from 'classnames';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    nodeName: PropTypes.string,
    align: PropTypes.oneOf(['top', 'bottom', 'center', 'stretch', 'baseline']),
    justify:PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between'])
  };

  static defaultProps = {
    className:'',
    nodeName: 'div'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  excludeProps(inArray) {
    let props = {
      ...this.props
    };

    inArray.forEach((item) => {
      delete props[item];
    });
    return props;
  }

  render() {
    //todo:{align,nodeName,className,...props}
    const {align, nodeName, className} = this.props;
    const layout = this.layout;
    const layoutAlign = align ? `${layout}-${align}` : '';
    let props = Object.assign(this.excludeProps(['align', 'nodeName', 'className', 'layout']), {
      className: classNames(layout,layoutAlign, className)
    });

    return createElement(nodeName, props);
  }
}
