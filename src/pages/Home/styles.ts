import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: clamp(12px, 2vw, 16px);
  position: relative;
`;

export const IconsWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
  gap: clamp(8px, 2vw, 20px);
`;

export const HomeText = styled.h1`
  text-align: center;
  font-size: clamp(2.8rem, 6vw, 5.8rem);
  color: ${({ theme }) => theme.color.content};
  font-weight: ${({ theme }) => theme.fontWeight.strong};
  margin: 0 16px;
`;

export const Icon = styled.div<{
  $reverse?: boolean;
}>`
  transition: transform 0.2s ease;

  svg {
    width: clamp(32px, 5vw, 50px);
    height: clamp(32px, 5vw, 50px);
  }

  &:hover {
    animation: ${({ $reverse }) =>
      $reverse
        ? 'rotateEffectReverse 1s infinite linear'
        : 'rotateEffect 1s infinite linear'};
  }

  @keyframes rotateEffect {
    0% {
      transform: rotate(0deg) scale(1);
    }
    25% {
      transform: rotate(15deg) scale(1.075);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    75% {
      transform: rotate(-15deg) scale(1.075);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }

  @keyframes rotateEffectReverse {
    0% {
      transform: rotate(0deg) scale(1);
    }
    25% {
      transform: rotate(-15deg) scale(1.075);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    75% {
      transform: rotate(15deg) scale(1.075);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  justify-content: space-between;

  width: 280px;
  padding: 16px;
  margin: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.highlight};
`;

export const ModalRow = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;

  svg {
    width: 58px;
    height: 58px;
  }
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex: 1;
`;
