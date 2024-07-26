import { FC } from "react";
import { SortOrder, SortTypes } from "../../types/enums";
import { ISortOptions } from "../../types/interfaces";
import { ArrowIcon } from "../icons/Arrow";
import clsx from "clsx";

interface ISortButtonProps {
  type: SortTypes;
  sortOptions: ISortOptions;
  changeSortOptions: (type: SortTypes) => void;
}

export const UiSortButton: FC<ISortButtonProps> = ({ type, sortOptions, changeSortOptions }) => {
  const isActive = sortOptions.type === type;

  return (
    <button
      onClick={() => changeSortOptions(type)}
      className={clsx(
        "flex items-center full:gap-1",
        "hover:opacity-50 transition-opacity",
        isActive && "text-yellow-300 hover:opacity-80"
      )}
    >
      <span>{type}</span>
      <ArrowIcon
        className={clsx(
          "w-2 h-2 full:h-3 transition-transform",
          isActive && sortOptions.order === SortOrder.Asc ? "rotate-180" : ""
        )}
      />
    </button>
  );
};
