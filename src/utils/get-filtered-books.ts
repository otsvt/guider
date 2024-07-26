import { IBook } from "../types/interfaces";

export const getFilteredBooks = (books: IBook[], tags: string[]): IBook[] => {
  return tags.length ? books.filter((book) => tags.some((tag) => book.tags.includes(tag))) : books;
};
