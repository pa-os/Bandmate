import { useState } from "react";

// TODO fix and use
export function useLocalstorage(
  keyName: string,
  defaultValue: unknown
): [unknown, (val: unknown) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch {
      return defaultValue;
    }
  });

  function setValue(newValue: unknown) {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (e) {
      console.error(e);
    }
    setStoredValue(newValue);
  }

  return [storedValue, setValue];
}
