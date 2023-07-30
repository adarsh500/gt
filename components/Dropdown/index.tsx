import React, { useCallback, useState } from 'react';
import styles from './Dropdown.module.css';

type DropdownProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

const Dropdown = (props: DropdownProps) => {
  const { trigger, children } = props;
  console.log(props);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className={styles.overlay} onClick={handleOpen}>
      <div className={styles.dropdown}>
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? <div className={styles.menu}>{children}</div> : null}
      </div>
    </div>
  );
};

export default Dropdown;
