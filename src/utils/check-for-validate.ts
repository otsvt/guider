import { IBook } from "../types/interfaces";

export const checkForValidate = (book: IBook): boolean => {
  return (
    book.title !== undefined &&
    book.author !== undefined &&
    book.date !== undefined &&
    book.price !== undefined &&
    book.id !== undefined
  );
};
