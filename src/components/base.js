import React, {PureComponent, createElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    nodeName: PropTypes.string,
    align: PropTypes.oneOf(['top', 'bottom', 'center', 'stretch', 'baseline'])
  };

  static defaultProps = {
    nodeName: 'div'
  };

}
