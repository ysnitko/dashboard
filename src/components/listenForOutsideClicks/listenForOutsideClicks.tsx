import { Dispatch, SetStateAction, MutableRefObject } from "react";

export function listenForOutsideClicks(
  listening: boolean,
  setListening: Dispatch<SetStateAction<boolean>>,
  menuRef: MutableRefObject<any>,
  setToggleFilter: Dispatch<SetStateAction<boolean>>
) {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        if (menuRef.current === null) return;
        if (menuRef.current.contains(evt.target)) return;
        setToggleFilter(false);
      });
    });
  };
}
