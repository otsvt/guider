import { FC } from "react";
import { SortTypes } from "../../types/enums";
import { ISortOptions, ITagsStore } from "../../types/interfaces";
import { useTagMenu } from "../../hooks/use-tag-menu";
import { UiSortButton } from "../uikits/UiSortButton";
import { UiTagButton } from "../uikits/UiTagButton";
import { UiResetButton } from "../uikits/UiResetButton";
import { UiTagMenu } from "../uikits/UiTagMenu";
import clsx from "clsx";

interface IFilterProps {
  sortOptions: ISortOptions;
  tags: ITagsStore;
  changeSortOptions: (type?: SortTypes) => void;
  toggleTag: (tag: string) => void;
  resetActiveTags: () => void;
}

export const Filter: FC<IFilterProps> = ({ sortOptions, tags, changeSortOptions, toggleTag, resetActiveTags }) => {
  const [isMenuOpen, toggleMenu] = useTagMenu();

  return (
    <div
      className={clsx("py-4 px-5 full:py-8 full:px-10", "flex justify-between items-center", "bg-frame rounded-[32px]")}
    >
      <div className={clsx("relative", "flex items-center gap-1 full:gap-5", "text-sm full:text-base")}>
        <UiSortButton type={SortTypes.Price} sortOptions={sortOptions} changeSortOptions={changeSortOptions} />
        <UiSortButton type={SortTypes.Author} sortOptions={sortOptions} changeSortOptions={changeSortOptions} />
        <UiSortButton type={SortTypes.Date} sortOptions={sortOptions} changeSortOptions={changeSortOptions} />
      </div>
      <div className={clsx("relative", "flex items-center gap-2 full:gap-5", "text-sm full:text-base")}>
        <UiTagButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <UiResetButton changeSortOptions={changeSortOptions} resetActiveTags={resetActiveTags} />
        <UiTagMenu isOpen={isMenuOpen} tags={tags} toggleTag={toggleTag} />
      </div>
    </div>
  );
};
