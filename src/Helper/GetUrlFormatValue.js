export function GetUrlFormatValue(url) {
  let skills = '';
  let loc = '';
  const fullUrl = url.pathname.replace('/', '');
  const value = fullUrl.split('-');
  const position = value.indexOf('jobs');
  if (position !== -1 && position > 0) {
    skills = value[0];
    if (value[position + 1] === 'in') {
      loc = value[3];
    }
  }
  if (position !== -1 && position === 0) {
    loc = value[2];
  }
  return [skills, loc];
}
