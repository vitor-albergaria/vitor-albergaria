import * as S from './styles';

interface IModal {
  children: React.ReactNode;
  show: boolean;
  toggle?: () => void;
}

export const Modal: React.FC<IModal> = ({ children, show, toggle }) => {
  const handleWrapperClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && toggle) toggle();
  };

  return (
    <S.ModalWrapper $show={show} onClick={handleWrapperClick}>
      {children}
    </S.ModalWrapper>
  );
};
