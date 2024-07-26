import { useEffect, useState } from "react";
import { Urls } from "../types/enums";
import { IBook } from "../types/interfaces";
import { checkForValidate } from "../utils/check-for-validate";
import axios from "axios";

export const useFetch = (): { books: IBook[]; isLoading: boolean; error: string | null } => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(Urls.Books);

        const validBooks: IBook[] = response.data.filter((book: IBook) => {
          const valid = checkForValidate(book);
          if (!valid) console.log("Not enough data. Wrong item:", book);

          return valid;
        });

        setBooks(validBooks);
      } catch (err) {
        setError("Network error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, isLoading, error };
};
