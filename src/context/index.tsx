import { AppProvider } from './AppProvider';

interface IContextProvider {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: IContextProvider) => {
  return <AppProvider>{children}</AppProvider>;
};
