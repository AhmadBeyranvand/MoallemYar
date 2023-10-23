import React from "react";
import { Input, Button, Space } from "antd";
export default function SortableTestAnswer() {
  return (
    <div className="w-7/12 flex justify-center   ">
      <div className="flex flex-col m-2">
        <Input placeholder="تهران" className="m-1 rounded-none" />
        <Input placeholder="تهران" className="m-1 rounded-none" />
        <Input placeholder="تهران" className="m-1 rounded-none" />
      </div>
      <div className="flex flex-col m-2">
        <div className="flex justify-center items-center">
          <Input placeholder="ایران" className="m-1 rounded-none" />
          <Button
            className="underline px-8  mx-1 rounded-none text-sm"
            type="primary"
            ghost
          >
            ویرایش
          </Button>
          <Button
            className="underline px-5  mx-1 rounded-none text-sm"
            type="primary"
            danger
          >
            حذف
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <Input placeholder="ایران" className="m-1 rounded-none" />
          <Button
            className="underline px-6 mx-1 rounded-none text-sm"
            type="primary"
            ghost
          >
            ثبت
          </Button>
          <Button
            className="underline px-6 mx-1 rounded-none text-sm"
            type="primary"
            danger
          >
            حذف
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <Input placeholder="ایران" className="m-1 rounded-none" />

          <Button type="primary">ثبت</Button>
          <Button
            className="underline px-4 py-0 mx-1 rounded-none text-sm text-gray-400 border-gray-300"
            type="text"
          >
            ثبت
          </Button>
          <Button  primary>primary</Button>
        </div>
      </div>
    </div>
  );
}
