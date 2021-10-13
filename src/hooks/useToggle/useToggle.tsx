import { useState, useCallback } from "react";

export function useToggle(initial = false) {
  // Initialize intital boolean (toggle) value
  const [state, setState] = useState(initial);

  // Memoizing toggle
  const toggle = useCallback(() => setState((state: boolean) => !state), []);

  return [state, toggle];
}
