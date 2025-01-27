import styled from 'styled-components';

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  width: 300px;
  padding: 16px;
  margin: 32px;
  border-radius: 8px;

  background: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.highlight};
`;

export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const SelectorRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const SelectorOption = styled.button<{ $isActive: boolean }>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
  column-gap: 8px;

  border-radius: 8px;
  padding: 4px 16px;

  border: none;

  background: ${({ theme, $isActive }) =>
    $isActive ? theme.color.secondary : 'transparent'};

  transition: transform 0.2s ease, background 0.2s ease;

  border: ${({ theme, $isActive }) =>
    `1px solid ${theme.color[$isActive ? 'secondary' : 'highlight']}`};

  &:hover {
    transform: scale(1.05);
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.highlight};
  margin: 10px 0;
`;
