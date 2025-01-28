import { t } from 'i18next';
import React from 'react';
import * as S from './styles';
import * as Icons from '../../assets/icons';
import { Button, TextDisplay } from 'shiba-ui-core';
import { useModal } from '../../hooks';

type IconType = keyof typeof Icons;

interface IHomeIcon {
  id: string;
  reverse?: boolean;
  title: string;
  description: string;
}

export const Home: React.FC = () => {
  const { openModal, closeModal } = useModal();

  const renderIcon = (iconId: string) => {
    const IconComponent = Icons[iconId as IconType];
    return IconComponent ? <IconComponent /> : null;
  };

  const HOME_TITLE = 'FRONT END - WEB & MOBILE';

  const HOME_ICONS: IHomeIcon[] = [
    {
      id: 'HtmlIcon',
      reverse: false,
      title: 'HTML',
      description: t('html_description'),
    },
    {
      id: 'CssIcon',
      reverse: true,
      title: 'CSS',
      description: t('css_description'),
    },
    {
      id: 'JavaScriptIcon',
      reverse: false,
      title: 'JavaScript',
      description: t('javascript_description'),
    },
    {
      id: 'TypescriptIcon',
      reverse: true,
      title: 'TypeScript',
      description: t('typescript_description'),
    },
    {
      id: 'SassIcon',
      reverse: false,
      title: 'Sass',
      description: t('sass_description'),
    },
    {
      id: 'StyledComponentsIcon',
      reverse: true,
      title: 'Styled Components',
      description: t('styled_components_description'),
    },
    {
      id: 'ReactIcon',
      reverse: false,
      title: 'React',
      description: t('react_description'),
    },
    {
      id: 'JestIcon',
      reverse: true,
      title: 'Jest',
      description: t('jest_description'),
    },
    {
      id: 'NodeIcon',
      reverse: false,
      title: 'Node.js',
      description: t('node_description'),
    },
    {
      id: 'MongoDBIcon',
      reverse: true,
      title: 'MongoDB',
      description: t('mongodb_description'),
    },
  ];

  const openIconModal = (icon: IHomeIcon) => {
    openModal(
      <S.ModalContent>
        <S.ModalRow>
          {renderIcon(icon.id)}

          <S.ModalTextWrapper>
            <TextDisplay text={icon.title} weight='strong' />
            <TextDisplay text={icon.description} />
          </S.ModalTextWrapper>
        </S.ModalRow>

        <Button
          text={t('action_close')}
          background='error'
          onClick={closeModal}
          height={30}
          isFullWidth
        />
      </S.ModalContent>
    );
  };

  return (
    <S.MainWrapper>
      <S.HomeText>{HOME_TITLE}</S.HomeText>

      <S.IconsWrapper>
        {HOME_ICONS.map((icon) => (
          <S.Icon
            key={icon.id}
            $reverse={icon.reverse}
            onClick={() => openIconModal(icon)}
          >
            {renderIcon(icon.id)}
          </S.Icon>
        ))}
      </S.IconsWrapper>
    </S.MainWrapper>
  );
};
