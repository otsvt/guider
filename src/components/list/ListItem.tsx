import { FC } from "react";
import { IBook } from "../../types/interfaces";
import { UiTagItem } from "../uikits/UiTagItem";
import clsx from "clsx";

export const ListItem: FC<{ item: IBook }> = ({ item }) => {
  return (
    <article
      className={clsx(
        "py-2 px-3 full:py-4 full:px-6",
        "flex flex-col gap-3 full:gap-6",
        "rounded-[20px]",
        "bg-card/50 hover:bg-card",
        "transition-colors ease-in-out duration-300"
      )}
    >
      <header className="flex flex-col">
        <h3 className="mb-3 font-bold">
          <span className="font-normal">{item.id}</span> {item.title}
        </h3>
        <div>
          <span>
            <i className="text-sm">by</i> {item.author}
          </span>
          {item.illustrator && (
            <span>
              , <i className="text-sm">illustrator</i> {item.illustrator}
            </span>
          )}
        </div>
        <span>{item.date}</span>
        <span>{item.price}$</span>
      </header>
      <div className={clsx("pt-2", "flex flex-wrap gap-6", "border-t border-frame")}>
        {item.tags.map((tag) => (
          <UiTagItem
            key={tag}
            tag={tag}
            className="py-1 px-2 full:py-2 full:px-4 hover:bg-card text-sm full:text-base"
          />
        ))}
      </div>
    </article>
  );
};
