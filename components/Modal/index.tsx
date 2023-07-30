import React, { useEffect } from 'react';
import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  closeOnOutsideClick?: boolean;
  closeOnEscClick?: boolean;
  onClose: () => void;
};

const Modal = (props: ModalProps) => {
  const {
    isOpen,
    children,
    className = '',
    closeOnOutsideClick = true,
    closeOnEscClick = true,
    onClose,
  } = props;
  const ref = React.useRef(null);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.position = 'relative';
      body.style.overflow = 'hidden';
    } else {
      body.style.removeProperty('position');
      body.style.removeProperty('overflow');
    }
  }, [isOpen]);

  useEffect(() => {
    const checkIfEscapeClick = (e) => {
      isOpen && e.keyCode === 27 && onClose && onClose();
    };
    closeOnEscClick && window.addEventListener('keydown', checkIfEscapeClick);
    return () => {
      closeOnEscClick &&
        window.removeEventListener('keydown', checkIfEscapeClick);
    };
  }, [isOpen, closeOnEscClick]);

  const handleClose = () => {
    if (!closeOnOutsideClick) return;
    onClose && onClose();
  };

  const component = () => {
    return (
      <div className={styles.container} onClick={handleClose}>
        <div
          ref={ref}
          className={`${styles.modal} ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  };

  if (!isOpen || !children) return null;
  return component();
};

export default Modal;
