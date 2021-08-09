import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import { Container, Label, Input, Error } from './styles';

function InputComponent({ label, type, error, ...rest }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        {...rest}
        $hasError={!!error}
        type={type === 'mask' ? 'text' : type}
        as={type === 'mask' ? InputMask : undefined}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

InputComponent.defaultProps = {
  type: 'text',
  error: undefined,
};

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
};

export default React.memo(InputComponent);
