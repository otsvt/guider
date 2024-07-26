import { FC } from "react";

export const UiErrorMessage: FC<{ message: string }> = ({ message }) => {
  return <div className="font-bold text-3xl text-red-500">{message}</div>;
};
