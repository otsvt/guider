import { useState } from "react";
import { SortOrder, SortTypes } from "../types/enums";
import { ISortOptions } from "../types/interfaces";

export const useSortOptions = (): [ISortOptions, (type?: SortTypes) => void] => {
  const [sortOptions, setSortOptions] = useState<ISortOptions>({
    type: SortTypes.None,
    order: SortOrder.Asc,
  });

  const changeSortOptions = (type?: SortTypes) => {
    if (!type) {
      setSortOptions({
        type: SortTypes.None,
        order: SortOrder.Asc,
      });
    } else {
      setSortOptions((prev) => ({
        type: prev.type === type ? prev.type : type,
        order: prev.type === type ? (prev.order === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc) : SortOrder.Asc,
      }));
    }
  };

  return [sortOptions, changeSortOptions];
};
