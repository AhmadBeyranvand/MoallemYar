import React from "react";
import { Input, Button, ConfigProvider } from "antd";

export default function SortableTestAnswer() {
  return (
    <ConfigProvider
      theme={{
        token:{
          colorFill:"#40189E"
        }
      }}>
    <div className="w-7/12 flex justify-center items-center ">
      <Input placeholder="تهران " />
      <Input placeholder="ایران " />
      <Button type="primary">
        ثبت
      </Button>
    </div>
    </ConfigProvider>
  );
}
