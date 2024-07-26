import { FC } from "react";
import { ITagsStore } from "../../types/interfaces";
import { UiTagItem } from "./UiTagItem";
import clsx from "clsx";

interface UiTagMaenuProps {
  tags: ITagsStore;
  isOpen: boolean;
  toggleTag: (tag: string) => void;
}

export const UiTagMenu: FC<UiTagMaenuProps> = ({ tags, isOpen, toggleTag }) => {
  return (
    <div
      data-id="tagMenu"
      className={clsx(
        "absolute top-full right-0",
        "w-[250px] p-4",
        "flex flex-wrap gap-2",
        "bg-card rounded-[20px]",
        "transition-opacity",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {tags.allTags.map((tag) => (
        <UiTagItem
          key={tag}
          tag={tag}
          isActive={tags.activeTags.includes(tag)}
          toggleTag={toggleTag}
          className="p-1 text-xs border-2 border-text hover:bg-white/20"
        />
      ))}
    </div>
  );
};
