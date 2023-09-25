import Style from "@/app/UserPanel/StyleSidbar.module.css"
import Logo from "@/assets/logo/logoWhite.svg"
import Image from "next/image"
import LogoHome from "../../../public/assets/icon/Home.svg"
import LogoCalendar from "../../../public/assets/icon/calendar.svg"
import LogoCheck from "../../../public/assets/icon/check.svg"
import LogoClock from "../../../public/assets/icon/clock.svg"
import LogoUser from "../../../public/assets/icon/user.svg"
import LogoUsers from "../../../public/assets/icon/users.svg"
import LogoClandarUsers from "../../../public/assets/icon/clandarUsers.svg"
import LogoUser2 from "../../../public/assets/icon/user2.svg"






const Sidbar = () => {
    return (
        <>
        <div className="flex">
            <aside className={Style.aside}>
                <Image width={250} src={Logo} alt="logo" className="mx-auto p-5" />
                <div className="pr-12 py-5">
                    <a className={Style.active}> 
                        <Image src={LogoHome} alt="home" />
                        پیشخوان
                    </a>

                    <legend className="py-3">امتحانات</legend>
                    <ul className="flex flex-col gap-5">
                        <li className="flex gap-4 items-cente">
                            <Image src={LogoCalendar} alt="calendar" />
                            <a className="hover:text-[#F2F2F2] transition-all duration-300 ease">امتحان جدید</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <Image src={LogoCheck} alt="check" />
                            <a className="text-[#F2F2F2] hover:text-[#F2F2F2] transition-all duration-300 ease">امتحانات برگزار شده</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <Image src={LogoClock} alt="clock" />
                            <a className="hover:text-[#F2F2F2] transition-all duration-300 ease">امتحانات فعال</a>
                        </li>
                    </ul>
                    <legend className="py-3">دانش آموزان</legend>
                    <ul className="flex flex-col gap-5">
                        <li className="flex gap-4 items-center">
                            <Image src={LogoUser} alt="user" />
                            <a className="hover:text-[#F2F2F2] transition-all duration-300 ease">ثبت دانش آموز جدید</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <Image src={LogoUsers} alt="users" />
                            <a className="hover:text-[#F2F2F2] transition-all duration-300 ease">لیست دانش آموزان</a>
                        </li>
                    </ul>
                    <legend className="py-3">کلاس ها</legend>
                    <div className="gap-5">
                        <li className="flex gap-4 items-center">
                            <Image src={LogoClandarUsers} alt="calendarusers" />
                            <a className="hover:text-[#F2F2F2] transition-all duration-300 ease">مدیریت کلاس ها</a>
                        </li>
                    </div>
                    <legend className="py-3">پروفایل کاربری</legend>
                    <div className="gap-5">
                        <li className="flex gap-4 items-center">
                            <Image src={LogoUser2} alt="user2" />
                            <a className="hover:text-[#F2F2F2] transition-all duration-300 ease">پروفایل کاربری</a>
                        </li>
                    </div>
                </div>
            </aside>
            <div className={Style.radius}></div>
        </div>
        </>
    )
}

export default Sidbar;