import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

const CheckoutContext = createContext({});

function CheckoutProvider({ initialSelectedItem = null, children }) {
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = useCallback(() => setIsCheckoutOpen(true), []);
  const closeCheckout = useCallback(() => setIsCheckoutOpen(false), []);

  const value = useMemo(
    () => ({
      selectedItem,
      selectItem: setSelectedItem,
      isCheckoutOpen,
      openCheckout,
      closeCheckout,
    }),
    [
      closeCheckout,
      isCheckoutOpen,
      openCheckout,
      selectedItem,
      setSelectedItem,
    ],
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error('useCheckout must be used within a <CheckoutProvider>');
  }

  return context;
}

CheckoutProvider.defaultProps = {
  initialSelectedItem: null,
};

CheckoutProvider.propTypes = {
  initialSelectedItem: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { useCheckout, CheckoutProvider };
