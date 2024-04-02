"use client";

import { Drawer } from "antd";
import { useState } from "react";

interface props {
  title?: string;
  Form?: any;
  open?: boolean;
  position?: any;
  closable?: boolean;
  onClose?: () => void;
}
export const Drawer_Info = ({ title, Form, open, position,closable ,onClose}: props) => {
    
    const[close, setClose] = useState(true);
  

  return (
    <>
      <Drawer
        title={title}
        placement={position}
        closable={closable}
        onClose={onClose}
        open={open}
        key={position}
        style={{width:500}}
      >
        {Form}
      </Drawer>
    </>
  );
};
