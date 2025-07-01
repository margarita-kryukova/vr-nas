import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

export interface IObserverOptions extends IntersectionObserverInit {
  observeOnce?: boolean;
  forceReconnect?: Array<unknown>;
}

export type IObserverReturn<T> = [
  ref: RefObject<T | null>,
  observerState: {
    observer: IntersectionObserver | null;
    entry: IntersectionObserverEntry | null;
  }
];

const defaultOptions: IObserverOptions = {
  observeOnce: false,
  forceReconnect: [],
};

const disconnectObserver = (observer: IntersectionObserver | null) => {
  if (observer) {
    observer.disconnect();
  }
};

function useIntersectionObserver<T = HTMLDivElement>(
  options: IObserverOptions = defaultOptions,
  onObserveCallback?: (
    entry: IntersectionObserverEntry,
    observerInstance: IntersectionObserver
  ) => void
): IObserverReturn<T> {
  const {
    threshold,
    root,
    rootMargin,
    observeOnce,
    forceReconnect = [],
  } = options;
  const [observerState, setObserverState] = useState<{
    observer: IntersectionObserver | null;
    entry: IntersectionObserverEntry | null;
  }>({ observer: null, entry: null });
  const ref = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback(
    (node: T | null) => {
      disconnectObserver(observerRef.current);
      observerRef.current = null;

      if (node instanceof Element) {
        const observer = new IntersectionObserver(
          ([entry], observerInstance) => {
            setObserverState((prevState) => ({ ...prevState, entry }));

            if (onObserveCallback) {
              onObserveCallback(entry, observerInstance);
            }

            if (observeOnce && entry.isIntersecting) {
              observerInstance.unobserve(entry.target);
            }
          },
          {
            threshold,
            root,
            rootMargin,
          }
        );

        observer.observe(node);
        observerRef.current = observer;
        setObserverState((prevState) => ({ ...prevState, observer }));
      }
    },
    [observeOnce, threshold, root, rootMargin, onObserveCallback]
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      observe(currentRef);
    }

    return () => {
      disconnectObserver(observerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observe, ...forceReconnect]);

  return [ref, observerState];
}

export { useIntersectionObserver };
