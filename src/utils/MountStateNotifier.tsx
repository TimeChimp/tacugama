import { useEffect } from 'react';

export interface MountStates {
  mounted: 'mounted';
  unmounted: 'unmounted';
}

interface MountStateNotifierProps {
  onStateChange: (mountState: MountStates[keyof MountStates]) => void;
}

export const MountStateNotifier = ({ onStateChange }: MountStateNotifierProps) => {
  useEffect(() => {
    onStateChange('mounted');
    return () => {
      onStateChange('unmounted');
    };
  }, []);

  return null;
};
