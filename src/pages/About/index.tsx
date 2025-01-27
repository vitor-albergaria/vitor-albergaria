import React from 'react';
import { t } from 'i18next';
import * as S from './styles';
import { useAppContext } from '../../hooks';
import { Badge, TextDisplay, Timeline } from 'shiba-ui-core';
import { formatDateRange } from '../../utils/date';
import { BadgeCategory, BADGES, EXPERIENCE } from './data';

export const About: React.FC = () => {
  const { appLanguage } = useAppContext();
  const formattedLanguage = appLanguage === 'i18n_pt' ? 'pt' : 'en';

  const renderBadges = (badgeCategory: BadgeCategory) => (
    <S.BadgesWrapper>
      {BADGES[badgeCategory].map((badge) => (
        <Badge key={badge} text={badge} />
      ))}
    </S.BadgesWrapper>
  );

  return (
    <S.AboutContainer>
      <S.SectionWrapper>
        <TextDisplay text={t('experience')} size='2x' weight='bold' />

        <Timeline
          data={EXPERIENCE.map((exp) => ({
            id: exp.id,
            title: t(exp.title),
            subtitle: `EVT · ${formatDateRange(
              exp.subtitle[0],
              exp.subtitle[1],
              formattedLanguage
            )}`,
            details: exp.details.map((desc) => t(desc)),
          }))}
        />
      </S.SectionWrapper>

      <S.SectionWrapper>
        <TextDisplay text={t('skills')} size='2x' weight='bold' />

        <TextDisplay text='Core' weight='strong' />
        {renderBadges('core')}

        <TextDisplay text={t('web_development')} weight='strong' />
        {renderBadges('webDevelopment')}

        <TextDisplay text={t('mobile_development')} weight='strong' />
        {renderBadges('mobileDevelopment')}

        <TextDisplay text={t('common')} weight='strong' />
        {renderBadges('common')}
      </S.SectionWrapper>
    </S.AboutContainer>
  );
};
