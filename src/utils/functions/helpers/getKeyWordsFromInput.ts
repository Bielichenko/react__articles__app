export function getWordsFromInput(inputString: string) {
  const keyWordsArray = inputString.trim().split(' ');

  return keyWordsArray.filter(word => !!word === true);
}
