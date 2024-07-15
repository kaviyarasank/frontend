import React from "react"
import Link from "next/link";
import EarthImg from "@/assets/Earth.svg";
import Image from "next/image";

const Sidebar = () => {

    return (
        <aside className="fixed top-16  h-full w-52 left-0 bg-white">
            <div className="flex flex-col gap-1 p-3 mt-3">
                <Link href={'/'} className="flex items-start gap-2 text-[#364152] bg-[#E0E0E0] p-3 font-semibold rounded-lg">
                <Image src={EarthImg} alt="EarthImg" className=""/>
                Dashboard</Link>
            </div>
        </aside>
    )
};

export default Sidebar;
