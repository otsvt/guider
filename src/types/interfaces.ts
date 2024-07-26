import { SortOrder, SortTypes } from "./enums";

export interface IBook {
  title: string;
  author: string;
  illustrator?: string;
  date: string;
  price: number;
  tags: string[];
  id: number;
}

export interface ISortOptions {
  type: SortTypes;
  order: SortOrder;
}

export interface ITagsStore {
  allTags: string[];
  activeTags: string[];
}
