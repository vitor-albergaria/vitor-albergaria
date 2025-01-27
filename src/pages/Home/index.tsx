import { t } from 'i18next';
import React, { useState } from 'react';
import * as S from './styles';
import * as Icons from '../../assets/icons';
import { Button, TextDisplay } from 'shiba-ui-core';
import { Modal } from '../../components/Modal';

type IconType = keyof typeof Icons;

interface IHomeIcon {
  id: string;
  reverse?: boolean;
  title: string;
  description: string;
}

export const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const [modalContent, setModalContent] = useState<IHomeIcon>();

  const openModal = ({ id, title, description }: IHomeIcon) => {
    setModalContent({ id, title, description });
    toggleModal();
  };

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

  return (
    <S.MainWrapper>
      <S.HomeText>{HOME_TITLE}</S.HomeText>

      <S.IconsWrapper>
        {HOME_ICONS.map(({ id, title, reverse, description }) => (
          <S.Icon
            key={id}
            $reverse={reverse}
            onClick={() => openModal({ id, title, description })}
          >
            {renderIcon(id)} {/* Usando a função renderIcon */}
          </S.Icon>
        ))}
      </S.IconsWrapper>

      <Modal show={showModal} toggle={toggleModal}>
        <S.ModalContent>
          <S.ModalRow>
            {renderIcon(modalContent?.id || '-')}

            <S.ModalTextWrapper>
              <TextDisplay text={modalContent?.title || '-'} weight='strong' />
              <TextDisplay text={modalContent?.description || '-'} />
            </S.ModalTextWrapper>
          </S.ModalRow>

          <Button
            text={t('action_close')}
            background='error'
            onClick={toggleModal}
            height={30}
            isFullWidth
          />
        </S.ModalContent>
      </Modal>
    </S.MainWrapper>
  );
};
