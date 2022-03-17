import React from 'react';
import onClickOutside from 'react-onclickoutside';

class UnwrappedClickOutsideWrapper extends React.Component {
  // This particular function is necessary for onClickOutside to do its magic
  handleClickOutside() {
    this.props.clickOutsideHandler();
  }

  render() {
    return this.props.children;
  }
}

export const ClickOutsideWrapper = onClickOutside(UnwrappedClickOutsideWrapper);
