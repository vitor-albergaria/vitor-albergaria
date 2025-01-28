import { AppProvider } from './AppProvider';
import { ModalProvider } from './ModalProvider';

interface IContextProvider {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: IContextProvider) => {
  return (
    <AppProvider>
      <ModalProvider>{children}</ModalProvider>
    </AppProvider>
  );
};
