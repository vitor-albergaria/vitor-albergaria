import { t } from 'i18next';
import React from 'react';
import * as S from './styles';
import { Button, TextDisplay } from 'shiba-ui-core';
import { useAppContext } from '../../hooks';
import { AppTheme } from '../../context/AppProvider';
import { AmericaIcon, BrazilFlagIcon } from '../../assets/icons';

export const Settings: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  const { appTheme, handleSetAppTheme, appLanguage, handleSetAppLanguage } =
    useAppContext();

  const themes: AppTheme[] = ['light', 'dark', 'ocean'];
  const languages: string[] = ['i18n_pt', 'i18n_en'];

  return (
    <S.SettingsContainer>
      <S.SelectorWrapper>
        <TextDisplay text={t('change_language')} weight='strong' />

        <S.SelectorRow>
          {languages.map((language) => (
            <S.SelectorOption
              key={language}
              $isActive={appLanguage === language}
              onClick={() => handleSetAppLanguage(language)}
            >
              {language === 'i18n_pt' ? <BrazilFlagIcon /> : <AmericaIcon />}

              <TextDisplay
                text={t(language)}
                weight='strong'
                color={appLanguage === language ? 'textDefault' : 'content'}
              />
            </S.SelectorOption>
          ))}
        </S.SelectorRow>
      </S.SelectorWrapper>

      <S.SelectorWrapper>
        <TextDisplay text={t('change_theme')} weight='strong' />

        <S.SelectorRow>
          {themes.map((theme) => (
            <S.SelectorOption
              key={theme}
              $isActive={appTheme === theme}
              onClick={() => handleSetAppTheme(theme)}
            >
              <TextDisplay
                text={theme.charAt(0).toUpperCase() + theme.slice(1)}
                weight='strong'
                color={appTheme === theme ? 'textDefault' : 'content'}
              />
            </S.SelectorOption>
          ))}
        </S.SelectorRow>
      </S.SelectorWrapper>

      <Button
        text={t('action_close')}
        background='error'
        onClick={toggle}
        height={30}
        isFullWidth
      />
    </S.SettingsContainer>
  );
};
