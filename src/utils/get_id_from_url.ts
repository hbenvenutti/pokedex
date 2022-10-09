export const getIdFromURL = (url: string): number => {
  const [, id] = url.split('/pokemon/');
  
  return +id.substring(0, id.length-1);
}
