/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

const PlatformsContext = createContext();

function PlatformsProvider({ initialData = {}, children }) {
  return (
    <PlatformsContext.Provider value={initialData}>
      {children}
    </PlatformsContext.Provider>
  );
}

function usePlatforms() {
  const context = useContext(PlatformsContext);

  if (!context) {
    throw new Error('PlatformsProvider not found');
  }

  return context;
}

export { usePlatforms, PlatformsProvider };
