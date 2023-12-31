'use client'
import { useState } from "react"
import Link from "next/link"

export default function MenuMobile() {

  const [isRotate, setIsRotate] = useState(false)

  const Change = () => {
    setIsRotate(!isRotate)
  }

  return (
    <>

      <div className="flex items-center justify-center" >
        <div className={`menuToggle ${isRotate ? "active" : null}`}
          onClick={Change}>

          <div className="box">
            {!isRotate ?
              <img className="menu-mobile-icon" src="/assets/icon/HamburgerMenu.svg" alt="منوی کاربری" />
              :
              <img className="menu-mobile-icon" src="/assets/icon/Close.svg" alt="خروج از منوی کاربری" />
            }
          </div>
          <span className="shadow-md rounded-full"></span>
        </div>
        <div className="menu">
          <ul>
            <li style={{ "--i": "0.1s" }}>
              <Link href="#" title="پیشخوان">
              <img className="active:brightness-200 menu-mobile-icon" src="/assets/icon/HomeIcon.svg" alt="پیشخوان" />

            </Link>
            </li>
            <li style={{ "--i": "0.2s" }}>
              <Link href="#" title="امتحانات جدید">
              <img className="active:brightness-200 menu-mobile-icon" src="/assets/icon/Clendar.svg" alt="امتحانات جدید" />
            </Link>
            </li>
            <li></li>
            <li style={{ "--i": "0.2s" }}>
              <Link href="#" title="لیست دانش آموزان">
              <img className="active:brightness-200 menu-mobile-icon" src="/assets/icon/users.svg" alt="لیست دانش آموزان" />
            </Link>
            </li>
            <li style={{ "--i": "0.1s" }}>
              <Link href="#" title="پروفایل کاربری">
              <img className="active:brightness-200 menu-mobile-icon" src="/assets/icon/Profile.svg" alt="پروفایل کاربری" />
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
