import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import ArrowNext from '~/assets/svg/arrow-next.svg';

function Link({ children, withArrow, ...rest }) {
  return (
    <Container {...rest} withArrow={withArrow}>
      {children}

      {withArrow && <ArrowNext />}
    </Container>
  );
}

Link.defaultProps = {
  children: undefined,
  withArrow: false,
};

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  withArrow: PropTypes.bool,
};

export { Link };
