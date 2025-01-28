import React, { createContext, useState, useEffect, ReactNode } from 'react';
import i18n from 'i18next';

export type AppTheme = 'light' | 'dark' | 'ocean';

export interface IAppContext {
  appTheme: AppTheme;
  handleSetAppTheme: (theme: AppTheme) => void;
  appLanguage: string;
  handleSetAppLanguage: (language: string) => void;
  showModal: boolean;
  handleOpenModal: (content: ReactNode) => void;
  modalContent: React.ReactNode;
  handleCloseModal: () => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const [appTheme, setAppTheme] = useState<AppTheme>('ocean');
  const [appLanguage, setAppLanguage] = useState<string>('i18n_pt');

  const handleOpenModal = (content: ReactNode) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSetAppTheme = (newTheme: AppTheme) => {
    setAppTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleSetAppLanguage = (newLanguage: string) => {
    setAppLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage.replace('i18n_', ''));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as AppTheme | null;
    if (savedTheme) setAppTheme(savedTheme);

    const savedLanguage = localStorage.getItem('language') as string | null;

    if (savedLanguage) {
      setAppLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage.replace('i18n_', ''));
    } else {
      const browserLanguage = navigator.language || navigator.languages[0];
      const language = browserLanguage.startsWith('pt') ? 'i18n_pt' : 'i18n_en';

      setAppLanguage(language);
      i18n.changeLanguage(language.replace('i18n_', ''));
      localStorage.setItem('language', language);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        appTheme,
        handleSetAppTheme,
        appLanguage,
        handleSetAppLanguage,
        showModal,
        handleCloseModal,
        modalContent,
        handleOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
