/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

const SelectedPlatformContext = createContext();

function SelectedPlatformProvider({ initialData = {}, children }) {
  return (
    <SelectedPlatformContext.Provider value={initialData}>
      {children}
    </SelectedPlatformContext.Provider>
  );
}

function useSelectedPlatform() {
  const context = useContext(SelectedPlatformContext);

  if (!context) {
    throw new Error('SelectedPlatformProvider not found');
  }

  return context;
}

export { useSelectedPlatform, SelectedPlatformProvider };
