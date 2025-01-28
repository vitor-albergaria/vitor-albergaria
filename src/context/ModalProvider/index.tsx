import * as S from './styles';
import { IModal, IModalContext } from './types';
import React, { createContext, useState, ReactNode } from 'react';

const ModalContext = createContext<IModalContext | undefined>(undefined);

const Modal: React.FC<IModal> = ({ isVisible, closeModal, children }) => {
  const handleWrapperClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  if (!isVisible) return null;

  return (
    <S.ModalWrapper $show={isVisible} onClick={handleWrapperClick}>
      {children}
    </S.ModalWrapper>
  );
};

const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openModal = (modalContent: ReactNode) => {
    setContent(modalContent);
    setIsVisible(true);
  };

  const closeModal = () => {
    setContent(null);
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal isVisible={isVisible} closeModal={closeModal}>
        {content}
      </Modal>
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
