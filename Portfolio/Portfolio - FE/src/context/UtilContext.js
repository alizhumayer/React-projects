import { createContext, useContext } from 'react';

export const UtilContext = createContext();

export const useUtils = () => {
  return useContext(UtilContext);
};
