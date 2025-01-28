import styled from 'styled-components';

export const ModalWrapper = styled.div<{ $show: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  position: fixed;
  z-index: 999;

  opacity: ${(props) => (props.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;
