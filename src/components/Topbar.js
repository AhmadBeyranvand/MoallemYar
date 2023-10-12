"use client"
import React, { useState } from "react";
import { Avatar, Popover, Button } from "antd";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <div className="flex w-full bg-white rounded-full mt-2 p-2  align-center justify-between">
      <div className="">
        <div className="flex">
          <img
            src="/assets/icon/homeOutline.svg"
            alt="homeIcon"
            className="mr-10 ml-2"
          />
          <p style={{ color: "#555555" }}>پیشخوان </p>
        </div>
      </div>
      <div className="flex">
        <p style={{ color: "#555555" }}> علی امیری ، خوش آمدید </p>
        <Popover
        content={<a onClick={hide} className="flex align-center"> <img src="/assets/icon/powerButton.svg" alt="powerButton"/><p style={{color:"#EE6E62" , fontSize:17}}>خروج</p></a>}
        title={<div className="flex"><img src="/assets/icon/userOutline.svg" alt="userOutline"/><p className="mr-2">پروفایل کاربری</p></div>}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Avatar size={30} className="mr-6" />
      </Popover>
        
      </div>

    </div>
  );
}
