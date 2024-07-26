import { useEffect, useState } from "react";
import { IBook, ITagsStore } from "../types/interfaces";

interface IUseTagsStoreReturn {
  tags: ITagsStore;
  toggleTag: (tag: string) => void;
  resetActiveTags: () => void;
}

export const useTagsStore = (books: IBook[]): IUseTagsStoreReturn => {
  const [tags, setTags] = useState<ITagsStore>({
    allTags: [],
    activeTags: [],
  });

  useEffect(() => {
    const tags: string[] = [];

    books.forEach((book) => {
      for (const tag of book.tags) {
        if (!tags.includes(tag)) tags.push(tag);
      }
    });

    setTags((prev) => {
      return {
        ...prev,
        allTags: tags,
      };
    });
  }, [books]);

  const toggleTag = (tag: string) => {
    setTags((prev) => {
      return {
        ...prev,
        activeTags: prev.activeTags.includes(tag)
          ? prev.activeTags.filter((t) => t !== tag)
          : [...prev.activeTags, tag],
      };
    });
  };

  const resetActiveTags = () => {
    setTags((prev) => {
      return {
        ...prev,
        activeTags: [],
      };
    });
  };

  return { tags, toggleTag, resetActiveTags };
};
