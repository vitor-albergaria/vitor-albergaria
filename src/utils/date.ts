export const formatDateRange = (
  startDateStr: string,
  endDateStr: string | 'now',
  language: 'pt' | 'en' = 'pt'
): string => {
  const monthsPt = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const monthsEn = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const months = language === 'pt' ? monthsPt : monthsEn;

  const start = new Date(startDateStr);
  const end = endDateStr === 'now' ? new Date() : new Date(endDateStr);

  const startMonth = months[start.getMonth()];
  const startYear = start.getFullYear();

  const endMonth = months[end.getMonth()];
  const endYear = end.getFullYear();

  const startDateString = `${startMonth} de ${startYear}`;
  const endDateString =
    endDateStr === 'now'
      ? language === 'pt'
        ? 'o momento'
        : 'present'
      : `${endMonth} de ${endYear}`;

  const yearDiff = endYear - startYear;
  const monthDiff = end.getMonth() - start.getMonth();

  let totalMonths = yearDiff * 12 + monthDiff + 1;

  const years = Math.floor(totalMonths / 12);
  const monthsDiff = totalMonths % 12;

  let duration = '';

  if (years > 0 && monthsDiff > 0) {
    duration =
      language === 'pt'
        ? `${years} ${years > 1 ? 'anos' : 'ano'} e ${monthsDiff} ${
            monthsDiff > 1 ? 'meses' : 'mês'
          }`
        : `${years} ${years > 1 ? 'years' : 'year'} and ${monthsDiff} ${
            monthsDiff > 1 ? 'months' : 'month'
          }`;
  } else if (years > 0) {
    duration =
      language === 'pt'
        ? `${years} ${years > 1 ? 'anos' : 'ano'}`
        : `${years} ${years > 1 ? 'years' : 'year'}`;
  } else if (monthsDiff > 0) {
    duration =
      language === 'pt'
        ? `${monthsDiff} ${monthsDiff > 1 ? 'meses' : 'mês'}`
        : `${monthsDiff} ${monthsDiff > 1 ? 'months' : 'month'}`;
  }

  return `${startDateString} - ${endDateString} · ${duration}`;
};
