import { FC } from "react";
import { IBook } from "../../types/interfaces";
import { ListItem } from "./ListItem";
import clsx from "clsx";

export const List: FC<{ books: IBook[] }> = ({ books }) => {
  const totalPrice = books.reduce((acc, book) => acc + book.price, 0);

  return (
    <div className={clsx("w-full", "py-4 px-5 full:py-8 full:px-10", "flex flex-col gap-5", "bg-frame rounded-[32px]")}>
      {books.map((book) => (
        <ListItem key={book.id} item={book} />
      ))}
      <div className="text-base full:text-xl uppercase">
        <span className="font-bold">total</span>: {totalPrice}$
      </div>
    </div>
  );
};
