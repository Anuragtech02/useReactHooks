import { useState, useEffect } from "react";

interface Props {
  key: string;
}

interface UseLocalStorage {
  value: string;
  setValue: (value: string) => void;
  getValue: () => string;
}

export function useLocalStorage<UseLocalStorage>(props: Props) {
  const [localValue, setLocalValue] = useState<any>();

  useEffect(() => {
    // Change local item value every time key changes
    const currentValue = localStorage.getItem(props.key);
    setLocalValue(currentValue);
  }, [props.key]);

  const getValue = () => {
    const item = localStorage.getItem(props.key);

    // Check if the item even exists
    if (item) {
      setLocalValue(JSON.parse(item));
      return JSON.parse(item);
    }

    return null;
  };

  const setValue = (newValue: any) => {
    setLocalValue(newValue);
    localStorage.setItem(props.key, JSON.stringify(newValue));
  };

  return {
    value: localValue,
    getValue,
    setValue,
  };
}
