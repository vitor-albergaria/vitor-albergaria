import React from 'react';
import * as S from './styles';
import { FigmaIcon, GithubIcon, LinkedinIcon } from '../../assets/icons';
import { FiGMA_URL, GITHUB_URL, LINKEDIN_URL } from '../../utils/urls';

export const Footer: React.FC = () => {
  const handleIconClick = (url: string) => window.open(url, '_blank');

  return (
    <S.Footer>
      <S.IconWrapper onClick={() => handleIconClick(LINKEDIN_URL)}>
        <LinkedinIcon />
      </S.IconWrapper>

      <S.IconWrapper onClick={() => handleIconClick(GITHUB_URL)}>
        <GithubIcon />
      </S.IconWrapper>

      <S.IconWrapper onClick={() => handleIconClick(FiGMA_URL)}>
        <FigmaIcon />
      </S.IconWrapper>
    </S.Footer>
  );
};
