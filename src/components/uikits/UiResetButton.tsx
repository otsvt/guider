import { FC } from "react";

interface IUiResetButtonProps {
  changeSortOptions: () => void;
  resetActiveTags: () => void;
}

export const UiResetButton: FC<IUiResetButtonProps> = ({ changeSortOptions, resetActiveTags }) => {
  return (
    <button
      onClick={() => {
        changeSortOptions();
        resetActiveTags();
      }}
      className="hover:opacity-50 transition-opacity"
    >
      reset rules
    </button>
  );
};
