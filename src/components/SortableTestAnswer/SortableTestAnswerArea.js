import React from "react";
import { Input, Button, ConfigProvider } from "antd";

export default function SortableTestAnswer() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorFill: "#40189E",
        },
      }}
    >
      <div className="w-7/12 flex justify-center items-center ">
        <div className="w-5/6 flex justify-center items-center">
          <Input placeholder="تهران " className=" ml-2 rounded-none" />
          <Input placeholder="ایران " className=" mx-2 rounded-none" />
          <Button type="primary" className="px-7 rounded-none">ثبت</Button>
        </div>
        <div className="">

        </div>
      </div>
    </ConfigProvider>
  );
}
