import React, { useRef, useEffect, MutableRefObject } from 'react';

const useOutside = (ref: MutableRefObject<any>, onClickOutside: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export interface ClickOutsideProps {
  children: React.ReactNode;
  onClickOutside: () => void;
}

export const ClickOutside = ({ children, onClickOutside }: ClickOutsideProps) => {
  const wrapperRef = useRef(null);
  useOutside(wrapperRef, onClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
};
