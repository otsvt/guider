import { FC, PropsWithChildren } from "react";
import { useFetch } from "../hooks/use-fetch";
import { useSortOptions } from "../hooks/use-sort-options";
import { useTagsStore } from "../hooks/use-tags-store";
import { getFilteredBooks } from "../utils/get-filtered-books";
import { getSortedBooks } from "../utils/get-sorted-books";
import { Header } from "./header/Header";
import { Filter } from "./filter/Filter";
import { List } from "./list/List";
import { UiLoader } from "./uikits/UiLoader";
import { UiErrorMessage } from "./uikits/UiErrorMessage";
import clsx from "clsx";

export const App: FC = () => {
  const { books, isLoading, error } = useFetch();
  const [sortOptions, changeSortOptions] = useSortOptions();
  const { tags, toggleTag, resetActiveTags } = useTagsStore(books);

  const filteredBooks = getFilteredBooks(books, tags.activeTags);
  const sortedBooks = getSortedBooks(filteredBooks, sortOptions);

  return (
    <Wrapper>
      <Header />
      <Filter
        tags={tags}
        sortOptions={sortOptions}
        toggleTag={toggleTag}
        changeSortOptions={changeSortOptions}
        resetActiveTags={resetActiveTags}
      />
      <Content>
        {isLoading && <UiLoader />}
        {error && <UiErrorMessage message={error} />}
        {sortedBooks.length > 0 && <List books={sortedBooks} />}
      </Content>
    </Wrapper>
  );
};

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      className={clsx(
        "min-h-screen",
        "py-5 full:py-20 px-5",
        "*:max-w-lg *:mx-auto *:mb-5",
        "font-roboto",
        "bg-body text-text"
      )}
    >
      {children}
    </main>
  );
};

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <section className="flex items-center justify-center">{children}</section>;
};
