import { memo, useEffect, useRef, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  id: string;
  children: ReactNode;
}

export const Portal = ({ id, children }: PortalProps) => {
  const { current } = useRef(document.getElementById(id) || document.createElement('div'));
  const [mounted, setMounted] = useState(false);
  const dynamic = !current.parentElement;

  useEffect(() => {
    if (dynamic) {
      current.id = id;
      document.body.appendChild(current);
      setMounted(true);
    }
    return () => {
      if (dynamic && current.parentElement) {
        current?.parentElement?.removeChild(current);
      }
    };
  }, [dynamic, id, current]);

  return mounted ? createPortal(children, current) : null;
};

export default memo(Portal);
