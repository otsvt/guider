import { FC } from "react";
import clsx from "clsx";

export const Header: FC = () => {
  return (
    <header className={clsx("p-4 full:p-8", "flex justify-center items-center", "bg-frame rounded-[32px]")}>
      <h1 className="text-3xl full:text-6xl">Book Store</h1>
    </header>
  );
};
