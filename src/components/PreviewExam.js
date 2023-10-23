"use client";
import Link from "next/link";
import style from "@/components/previewexam.module.css";
import React from "react";
import { Skeleton } from "antd";

const PreviewExam = () => {
  return (
    <div className="flex flex-col w-5/12 h-9/12   rounded-2xl">
      <h3 className="text-right mr-9 text-textColor"> پیش نمایش</h3>
      <div className={style.boxPreview}>
        <div className={style.examPage}>
          <Skeleton.Image
            active
            className={style.previewSkeleton + " w-full"}
            shape="square"
          />
        </div>
        <div className={style.links}>
          <Link href="#" className={style.preQuestion}>
            <img
              src="/assets/icon/rightArrowWhite.svg"
              alt="rightArrow"
              className="w-5"
            />
            سوال قبلی
          </Link>

          <Link href="#" className={style.continue}>
            ثبت و ادامه
            <img
              src="/assets/icon/leftArrowWhite.svg"
              alt="leftArrow"
              className="w-5"
            />
          </Link>
          <Link href="#" className={style.finishQuestion}>
            <img
              src="/assets/icon/tickmark.svg"
              alt="tickmark"
              className="w-5"
            />
            اتمام سوالات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewExam;
