import { ReactNode } from 'react';

export interface IModal {
  isVisible: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export interface IModalContext {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}
