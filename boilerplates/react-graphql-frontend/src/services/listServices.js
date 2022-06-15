export const formatList = ({
  list = [],
  delimiter = ', ',
  defaultVal = 'None Available',
}) => {
  if (!list || list.length === 0) return defaultVal;
  return list.join(delimiter);
};

export default formatList;
