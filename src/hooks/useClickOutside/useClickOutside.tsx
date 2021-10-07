import { MutableRefObject, useEffect } from "react";

export function useClickOutside(ref: MutableRefObject<any>, callback: (event: MouseEvent | TouchEvent) => void) {
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        callback(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, callback]
  );
}