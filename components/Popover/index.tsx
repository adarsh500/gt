'use client';
import React, {
  CSSProperties,
  memo,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import styles from './Popover.module.css';
import { computePopoverPosition, updatePopoverPlacement } from './helpers';

export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

type PopoverProps = {
  isOpen?: boolean;
  portal?: boolean;
  trigger?: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  placement?: PopoverPlacement;
  closeOnOutsideClick?: boolean;
  toggleOnTriggerClick?: boolean;
  className?: string;
  style?: CSSProperties;
  onOpen?: () => void;
  onClose?: () => void;
};

const Popover = (props: PopoverProps) => {
  const {
    isOpen,
    portal,
    trigger,
    children,
    disabled,
    placement = 'bottom',
    closeOnOutsideClick = true,
    toggleOnTriggerClick,
    className = '',
    style = {},
    onOpen,
    onClose,
  } = props;
  const [open, setOpen] = useState(!!isOpen);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const triggerRef = React.useRef(null),
    popoverRef = React.useRef(null);

  useLayoutEffect(() => {
    if (triggerRef.current && popoverRef.current) {
      const updatePopoverPosition = () => {
        const triggerRect = triggerRef.current.getBoundingClientRect(),
          popoverRect = popoverRef.current.getBoundingClientRect();

        const updatedPlacement = updatePopoverPlacement(
          placement,
          triggerRect,
          popoverRect
        );

        setPopoverPosition(
          computePopoverPosition(
            updatedPlacement,
            triggerRect,
            popoverRect,
            portal
          )
        );
      };

      updatePopoverPosition();
      window.addEventListener('resize', updatePopoverPosition);
      window.addEventListener('scroll', updatePopoverPosition, true);
      return () => {
        window.removeEventListener('resize', updatePopoverPosition);
        window.removeEventListener('scroll', updatePopoverPosition, true);
      };
    }
  }, [triggerRef, popoverRef, open, placement]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const checkIfOutsideClick = (e) => {
      if (
        open &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target) &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target)
      ) {
        closePopover();
      }
    };

    closeOnOutsideClick &&
      document.addEventListener('mousedown', checkIfOutsideClick);
    return () => {
      closeOnOutsideClick &&
        document.removeEventListener('mousedown', checkIfOutsideClick);
    };
  }, [triggerRef, popoverRef, open, closeOnOutsideClick]);

  const togglePopover = (e) => {
    e.stopPropagation();
    if (disabled) return;
    if (isOpen == null) {
      setOpen(!open);
    } else {
      if (isOpen) {
        onClose && onClose();
      } else {
        onOpen && onOpen();
      }
    }
  };

  const openPopover = (e) => {
    e.stopPropagation();
    if (disabled) return;
    isOpen == null && setOpen(true);
    onOpen && onOpen();
  };

  const closePopover = () => {
    if (disabled) return;
    isOpen == null && setOpen(false);
    onClose && onClose();
  };

  const component = () => {
    return (
      <div
        ref={popoverRef}
        className={`${styles.popover} ${
          portal ? styles.portalPopover : ''
        } ${className} ssb`}
        style={{
          ...style,
          ...popoverPosition,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div
        ref={triggerRef}
        className={styles.trigger}
        onClick={toggleOnTriggerClick ? togglePopover : openPopover}
      >
        {trigger}
      </div>
      {open ? portal ? <Portal>{component()}</Portal> : component() : null}
    </div>
  );
};

export default memo(Popover);
