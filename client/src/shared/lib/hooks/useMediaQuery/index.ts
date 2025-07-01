import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (width: string | number, queryType = "min") => {
  const [targetReached, setTargetReached] = useState<boolean>(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    setTargetReached(e.matches);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(${queryType}-width: ${width}px)`);

    setTargetReached(media.matches);

    media.addEventListener("change", updateTarget);

    return () => {
      media.removeEventListener("change", updateTarget);
    };
  }, [width, queryType, updateTarget]);

  return targetReached;
};
