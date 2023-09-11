"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
    label: string;
    page: string;
}

const NAVITEMS : Array<NavItem> = [
    {
        label: 'Home',
        page: 'home',
    },
    {
        label: 'About',
        page: 'about',
    },
    {
        label: 'Projects',
        page: 'projects'
    }
]

const Navbar = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:border-stone-600">
        <div className="justify-between md:items-center md:flex">
            <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold">Samuel Gitimu</h2>
            </div>
            <div className="md:flex md:space-x-6">
                {NAVITEMS.map((item, index) => {
                    return <a key={index}>{item.label}</a>
                })}
            </div>
        </div>
    </header>
  )
}

export default Navbar