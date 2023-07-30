const offset = 4;

export const updatePopoverPlacement = (placement, triggerRect, popoverRect) => {
  const viewportHeight = window.innerHeight;

  let newPlacement = placement;
  if (
    placement.startsWith('bottom') &&
    triggerRect.bottom + offset + popoverRect.height > viewportHeight
  ) {
    newPlacement = placement.replace('bottom', 'top');
  }
  return newPlacement;
};

export const computePopoverPosition = (placement, triggerRect, popoverRect) => {
  const horizontalCenterAlign =
    (popoverRect.width / 2) * -1 + triggerRect.width / 2;

  switch (placement) {
    case 'bottom':
      return {
        top: triggerRect.height + offset,
        left: horizontalCenterAlign,
      };
    default:
      return { top: 0, left: 0 };
  }
};
