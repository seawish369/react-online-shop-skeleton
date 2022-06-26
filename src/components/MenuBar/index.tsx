import React from 'react';

interface MenuBarProps{
  name: string
}

const MenuBar: React.FC<MenuBarProps> = (props: any) => {
  const { name } = props;
  return (
    <div>{name}</div>
  );
}

export default MenuBar;
