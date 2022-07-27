import { RefObject, useEffect } from 'react';

const OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

interface Props {
  callback: (entries: IntersectionObserverEntry[]) => void;
  ref: RefObject<Element>;
}

const useIntersectionObserver = ({ callback, ref }: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, OPTIONS);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, callback]);
};

export default useIntersectionObserver;
