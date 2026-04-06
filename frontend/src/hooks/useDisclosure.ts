'use client';

import { useCallback, useState } from 'react';

type DisclosureState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export default function useDisclosure(initialValue = false): DisclosureState {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((current) => !current);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
