import { FC } from "react";
import { TriangleIcon } from "../icons/Triangle";
import clsx from "clsx";

export const UiTagButton: FC<{ toggleMenu: () => void; isOpen: boolean }> = ({ toggleMenu, isOpen }) => {
  return (
    <button
      data-id="tagButton"
      onClick={toggleMenu}
      className={clsx("flex items-center gap-1 full:gap-2", "hover:opacity-50 transition-opacity")}
    >
      <span className="font-bold">Tags</span>
      <TriangleIcon className={clsx("h-2 w-2 full:h-3 full:w-3 transition-transform", isOpen && "rotate-180")} />
    </button>
  );
};
