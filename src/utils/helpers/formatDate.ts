/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

function formatMonth(month: string): string {
  switch (month) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
    default:
      return '???';
  }
}

function formatDay(date: string): string {
  switch (date) {
    case '1':
    case '21':
    case '31':
      return `${date}st`;
    case '2':
    case '22':
      return `${date}nd`;
    case '3':
    case '23':
      return `${date}rd`;
    default:
      return `${date}th`;
  }
}

export function formatDate(publishedAt: string) {
  const [year, month, day] = publishedAt.slice(0, 10).split('-');
  const monthFormatted: string = formatMonth(month);
  const dayFormatted: string = formatDay(parseInt(day, 10).toFixed());
  const dateFormatted = `${monthFormatted} ${dayFormatted}, ${year}`;

  return dateFormatted;
}
