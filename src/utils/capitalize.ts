export const capitalize = (str: string): string => {
  return str.replace(/^\w/, c => c.toUpperCase())
}

export const capitalizeName = (str: string): string => {
  const array = str.split(' ');

  const transformedArray = array.map(str => capitalize(str))

  return transformedArray.join(' ');
} 
