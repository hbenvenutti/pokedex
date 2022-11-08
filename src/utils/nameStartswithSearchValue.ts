export const nameStartsWithValue = (value: string, name: string): boolean => {
  const regex = new RegExp(`^${value}.*$`, 'i');

  return regex.test(name);
}
