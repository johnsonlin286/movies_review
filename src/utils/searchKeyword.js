const searchKeyword = (data, keyword) => {
  const regex = new RegExp(keyword, 'gi');
  const filteredData = data.filter(obj =>
    Object.values(obj).some(val => regex.test(val.toString()))
  );

  return filteredData.map(obj =>
    Object.entries(obj).reduce((acc, [key, value]) => {
      acc[key] = value.toString().replaceAll(regex, `<strong>${keyword}</strong>`);
      return acc;
    }, {})
  );
}

export default searchKeyword;