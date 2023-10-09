'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Close from "../../../public/Close.svg"
import HamburgerMenu from "../../../public/HamburgerMenu.svg"
import HomeIcon from "../../../public/HomeIcon.svg"
import Users from "../../../public/Users.svg"
import Profile from "../../../public/Profile.svg"
import Clendar from "../../../public/Clendar.svg"


export default function MenuMobile() {

  const [isRotate, setIsRotate] = useState(false)

  const Change = () => {
    setIsRotate(!isRotate)
  }

  return (
    <>

      <div className="container">
        <div className={`menuToggle ${isRotate ? "active" : null}`}
          onClick={Change}>

          <div className="box">
            {!isRotate ?
              <Image src={HamburgerMenu} alt="منوی کاربری" />
              :
              <Image src={Close} alt="خروج از منوی کاربری" />
            }
          </div>
          <span></span>
        </div>
        <div className="menu">
          <ul>
            <li style={{ "--i": "0.1s" }}>
              <Link href="#" title="پیشخوان">
              <Image src={HomeIcon} alt="پیشخوان" />

            </Link>
            </li>
            <li style={{ "--i": "0.2s" }}>
              <Link href="#" title="امتحانات جدید">
              <Image src={Clendar} alt="امتحانات جدید" />
            </Link>
            </li>
            <li></li>
            <li style={{ "--i": "0.2s" }}>
              <Link href="#" title="لیست دانش آموزان">
              <Image src={Users} alt="لیست دانش آموزان" />
            </Link>
            </li>
            <li style={{ "--i": "0.1s" }}>
              <Link href="#" title="پروفایل کاربری">
              <Image src={Profile} alt="پروفایل کاربری" />
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
