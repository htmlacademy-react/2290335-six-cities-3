export const pluralize = (count: number, singular: string, plural: string): string =>
  `${count} ${count > 1 ? plural : singular}`;

export const capitalize = (title: string): string =>
  `${title.charAt(0).toUpperCase() + title.slice(1)}`;
