type DropdownProps = {
  open: boolean;
  trigger: React.ReactNode;
  menu?: React.ReactNode[];
  children: React.ReactNode;
};

const Dropdown = ({ open, trigger, menu, children }: DropdownProps) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {/* {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {menuItem}
            </li>
          ))} */}
          {children}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
