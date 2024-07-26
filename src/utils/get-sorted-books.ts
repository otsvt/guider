import { SortOrder, SortTypes } from "../types/enums";
import { IBook, ISortOptions } from "../types/interfaces";
import { getLastName } from "./get-last-name";

export const getSortedBooks = (books: IBook[], sortOptions: ISortOptions): IBook[] => {
  return [...books].sort((a, b) => {
    if (sortOptions.type === SortTypes.None) return 0;

    let comparison = 0;

    switch (sortOptions.type) {
      case SortTypes.Price:
        comparison = a.price - b.price;
        if (comparison === 0) comparison = getLastName(a.author).localeCompare(getLastName(b.author));
        break;
      case SortTypes.Author:
        comparison = getLastName(a.author).localeCompare(getLastName(b.author));
        break;
      case SortTypes.Date:
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
        if (comparison === 0) comparison = getLastName(a.author).localeCompare(getLastName(b.author));
        break;
    }

    return sortOptions.order === SortOrder.Asc ? comparison : -comparison;
  });
};
