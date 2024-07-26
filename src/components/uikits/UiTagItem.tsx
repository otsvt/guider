import { FC } from "react";
import clsx from "clsx";

interface IUiTagItemProps {
  tag: string;
  className: string;
  isActive?: boolean;
  toggleTag?: (tag: string) => void;
}

export const UiTagItem: FC<IUiTagItemProps> = ({ tag, className, isActive, toggleTag }) => {
  return (
    <div
      onClick={() => toggleTag && toggleTag(tag)}
      className={clsx(
        className,
        "flex justify-center items-center",
        "rounded-full cursor-pointer",
        "text-nowrap",
        "transition-colors ease-in-out duration-300",
        isActive ? "bg-card" : "bg-text",
        isActive ? "text-text hover:text-black" : "text-black hover:text-text"
      )}
    >
      {tag}
    </div>
  );
};
