import { useAppContext } from '../../hooks';
import * as S from './styles';
import React from 'react';

export const Modal: React.FC = () => {
  const { showModal, handleCloseModal, modalContent } = useAppContext();

  const handleWrapperClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <S.ModalWrapper $isVisible={showModal} onClick={handleWrapperClick}>
      {modalContent}
    </S.ModalWrapper>
  );
};
