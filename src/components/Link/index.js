import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import { Container } from './styles';
import ArrowNext from '~/assets/svg/arrow-next.svg';

function Link({ children, href, withArrow, ...rest }) {
  return (
    <NextLink href={href} passHref>
      <Container {...rest} withArrow={withArrow}>
        {children}

        {withArrow && <ArrowNext />}
      </Container>
    </NextLink>
  );
}

Link.defaultProps = {
  children: undefined,
  withArrow: false,
  href: undefined,
};

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  withArrow: PropTypes.bool,
  href: PropTypes.string,
};

export { Link };
