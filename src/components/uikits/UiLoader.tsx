import clsx from "clsx";
import { FC } from "react";

export const UiLoader: FC = () => {
  return (
    <div
      className={clsx(
        "w-[48px] h-[48px]",
        "border-[5px] border-frame border-b-transparent",
        "rounded-full",
        "animate-spin"
      )}
    ></div>
  );
};
