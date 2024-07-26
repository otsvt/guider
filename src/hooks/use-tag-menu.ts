import { useEffect, useState } from "react";

export const useTagMenu = (): [boolean, () => void] => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest("[data-id=tagMenu]") && !e.target.closest("[data-id=tagButton]")) setIsMenuOpen(false);
    };

    document.addEventListener("click", handleBodyClick);

    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, [isMenuOpen]);

  return [isMenuOpen, toggleMenu];
};
