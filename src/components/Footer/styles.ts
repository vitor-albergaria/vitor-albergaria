import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
  padding: 0 clamp(24px, 2vw, 32px);
  column-gap: clamp(12px, 2vw, 16px);
  position: relative;
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  svg {
    path {
      fill: ${({ theme }) => theme.color.content};
    }

    &:hover path {
      filter: brightness(0.75);
      transition: filter 0.2s ease-in-out;
    }
  }

  svg {
    width: clamp(24px, 5vw, 28px);
    height: clamp(24px, 5vw, 28px);
  }
`;
