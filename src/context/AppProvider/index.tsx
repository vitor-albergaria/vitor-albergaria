import React, { createContext, useState, useEffect, ReactNode } from 'react';
import i18n from 'i18next';

export type AppTheme = 'light' | 'dark' | 'ocean';

export interface IAppContext {
  appTheme: AppTheme;
  setAppTheme: (theme: AppTheme) => void;
  appLanguage: string;
  setAppLanguage: (language: string) => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<AppTheme>('light');
  const [appLanguage, setAppLanguage] = useState<string>('i18n_pt');

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

  const handleSetAppTheme = (newTheme: AppTheme) => {
    setAppTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleSetAppLanguage = (newLanguage: string) => {
    setAppLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage.replace('i18n_', ''));
  };

  return (
    <AppContext.Provider
      value={{
        appTheme,
        setAppTheme: handleSetAppTheme,
        appLanguage,
        setAppLanguage: handleSetAppLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
