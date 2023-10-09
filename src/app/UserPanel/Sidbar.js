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
                    <Image width={230} src={Logo} alt="logo" className="mx-auto p-5" />
                    <div className="pr-12 py-5">
                        <div className={Style.active}>
                                <i className="pr-2">
                                    <Image src={LogoHome} alt="home" />
                                </i>
                            <a href="#" className="flex items-center gap-4">
                                پیشخوان
                            </a>
                        </div>
                        <legend className="py-3">امتحانات</legend>
                        <ul className="flex flex-col  gap-5">
                            <li className="flex gap-4 items-center">
                                <i>
                                    <Image src={LogoCalendar} alt="calendar" />
                                </i>
                                <a href="3" className="hover:text-[#F2F2F2] transition-all duration-300 ease">امتحان جدید</a>
                            </li>
                            <li className="flex gap-4 items-center">
                                <i>
                                    <Image src={LogoCheck} alt="check" />
                                </i>
                                <a href="3" className="text-[#A69FFF] hover:text-[#F2F2F2] transition-all duration-300 ease">امتحانات برگزار شده</a>
                            </li>
                            <li className="flex gap-4 items-center">
                                <i>
                                    <Image src={LogoClock} alt="clock" />
                                </i>
                                <a href="#" className="hover:text-[#F2F2F2] transition-all duration-300 ease">امتحانات فعال</a>
                            </li>
                        </ul>
                        <legend className="py-3">دانش آموزان</legend>
                        <ul className="flex flex-col gap-5">
                            <li className="flex gap-4 items-center">
                                <i>
                                    <Image src={LogoUser} alt="user" />
                                </i>
                                <a href="#" className="hover:text-[#F2F2F2] transition-all duration-300 ease">ثبت دانش آموز جدید</a>
                            </li>
                            <li className="flex gap-4 items-center">
                                <i>
                                    <Image src={LogoUsers} alt="users" />
                                </i>
                                <a href="#" className="hover:text-[#F2F2F2] transition-all duration-300 ease">لیست دانش آموزان</a>
                            </li>
                        </ul>
                        <legend className="py-3">کلاس ها</legend>
                        <div className="gap-5">
                            <li className="flex gap-4 items-center">
                                <i>
                                    <Image src={LogoClandarUsers} alt="calendarusers" />
                                </i>
                                <a href="#" className="hover:text-[#F2F2F2] transition-all duration-300 ease">مدیریت کلاس ها</a>
                            </li>
                        </div>
                        <legend className="py-3">پروفایل کاربری</legend>
                        <div className="gap-5">
                            <li className="flex gap-4 items-center">
                                <i>
                                    <Image src={LogoUser2} alt="user2" />
                                </i>
                                <a href="#" className="hover:text-[#F2F2F2] transition-all duration-300 ease">پروفایل کاربری</a>
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