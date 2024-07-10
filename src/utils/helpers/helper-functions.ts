export const getStringDate = (date: Date) => date.toISOString().split("T")[0];

export const toCapitalStart = (str: string) =>
  str[0].toUpperCase() + str.slice(1);

export function trimmer(str: string, symbols: string[]): string {
  const strArr = str.split("");
  const newArr: string[] = [];

  strArr.forEach((symbol) => {
    if (!symbols.includes(symbol)) newArr.push(symbol);
  });

  return newArr.join("");
}
