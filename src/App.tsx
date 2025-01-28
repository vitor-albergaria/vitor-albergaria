import { t } from 'i18next';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from './hooks';
import { Header, StyledThemeProvider } from 'shiba-ui-core';
import { STORYBOOK_URL } from './utils/urls';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { Particles } from './components/Particles';
import { About } from './pages/About';
import { Settings } from './components/Settings';
import { Modal } from './components/Modal';

export type ActiveRoute = 'home' | 'about';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100dvh;
  overflow-y: auto;
  background: ${({ theme }) => theme.color.background};

  outline: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;

  z-index: 1;
`;

export const App: React.FC = () => {
  const { appTheme, handleCloseModal, handleOpenModal } = useAppContext();

  const [activeRoute, setActiveRoute] = useState<ActiveRoute>('home');
  const handleRouteChange = (route: ActiveRoute) => setActiveRoute(route);

  const HEADER_OPTIONS = [
    {
      id: 1,
      label: t('home'),
      handleClick: () => handleRouteChange('home'),
    },
    {
      id: 2,
      label: t('about'),
      handleClick: () => handleRouteChange('about'),
    },
    {
      id: 3,
      isInactive: true,
      label: t('library'),
      handleClick: () => window.open(STORYBOOK_URL, '_blank'),
    },
    {
      id: 4,
      isInactive: true,
      label: t('settings'),
      handleClick: () => {
        handleOpenModal(<Settings toggle={handleCloseModal} />);
      },
    },
  ];

  return (
    <StyledThemeProvider themeVariant={appTheme}>
      <Particles />

      <MainWrapper>
        <Header logo='Vitor Albergaria' menuItems={HEADER_OPTIONS} />
        {activeRoute === 'home' && <Home />}
        {activeRoute === 'about' && <About />}
        <Footer />
      </MainWrapper>

      <Modal />
    </StyledThemeProvider>
  );
};
