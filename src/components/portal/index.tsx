import { memo, useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  id: string;
  children: ReactNode;
}

export const Portal = ({ id, children }: PortalProps) => {
  const { current } = useRef(document.getElementById(id) || document.createElement('div'));
  const dynamic = !current.parentElement;

  useEffect(() => {
    if (dynamic) {
      current.id = id;
      document.body.appendChild(current);
    }
    return () => {
      if (dynamic && current.parentElement) {
        // @ts-expect-error - removeChild is not in the type definition
        current?.parentElement?.removeChild(current);
      }
    };
  }, [dynamic, id, current]);

  return createPortal(children, current);
};

export default memo(Portal);
