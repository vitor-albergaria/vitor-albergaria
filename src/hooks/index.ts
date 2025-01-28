import { useContext } from 'react';
import { AppContext, IAppContext } from '../context/AppProvider';
import { ModalContext } from '../context/ModalProvider';

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
