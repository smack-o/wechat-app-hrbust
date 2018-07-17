function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

function sameTerm(thisWeek, term, year) {
  const thisYear = thisWeek.split(' ')[0] - 1980;
  const termsObj = {
    春: 1,
    秋: 2,
  };
  const thisTerm = termsObj[thisWeek.split(' ')[1]];
  return thisYear === year && thisTerm === term;
}

function formatTerm(thisWeek) {
  const thisYear = thisWeek.split(' ')[0] - 1980;
  const termsObj = {
    春: 1,
    秋: 2,
  };
  const thisTerm = termsObj[thisWeek.split(' ')[1]];
  return {
    year: thisYear,
    term: thisTerm,
  };
}

module.exports = {
  formatTime,
  sameTerm,
  formatTerm,
}
