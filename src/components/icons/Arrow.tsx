import { FC } from "react";

export const ArrowIcon: FC<{ className: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 3.99658 11.3012" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.29 10.27L3.48 9.09C3.6 8.97 3.78 8.97 3.9 9.09C4.02 9.2 4.02 9.39 3.9 9.51L2.21 11.21C2.09 11.33 1.9 11.33 1.78 11.21L0.08 9.51C-0.03 9.39 -0.03 9.2 0.08 9.09C0.2 8.97 0.39 8.97 0.51 9.09L1.69 10.27L1.69 0L2.29 0L2.29 10.27Z"
        fill="currentColor"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  );
};
