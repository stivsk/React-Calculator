import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError = () => ({ hasError: true });

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    return hasError ? fallback : children;
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.element.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
