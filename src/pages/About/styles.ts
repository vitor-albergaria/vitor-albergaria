import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(24px, 2vw, 32px);
  position: relative;
  flex: 1;
  gap: 32px 128px;
  flex-wrap: wrap;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.highlight};
    border-radius: 10px;
  }

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.color.highlight} transparent;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  flex: 1;

  min-width: 250px;
  max-width: 800px;
  background: ${({ theme }) => theme.color.background};
`;

export const BadgesWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
