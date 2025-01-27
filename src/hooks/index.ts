import React from 'react';
import { AppContext, IAppContext } from '../context/AppProvider';

export const useAppContext = (): IAppContext => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};
