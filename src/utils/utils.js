export const sortByKey = (array, key) => {
  return array.sort((a, b) => b[key] - a[key])
}

export const truncate = (text, maxLength = 30) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}