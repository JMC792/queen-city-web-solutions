'use client'

import {useState, useEffect, Fragment} from 'react';
import Link from 'next/link'
import language from 'public/locales/english/navbar'
import Image from "next/image";
import logo from "/public/icons/superwoman.svg";
import SideNav from './SideNav';
import menu from "/public/icons/menu.svg";

function Navbar() {


    //Off Canvas (mobile) menu hook
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);


    // Adds Sticky to Navbar
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const navbar = document.querySelector('.header-selection');
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? navbar.classList.add('is-sticky')
            : navbar.classList.remove('is-sticky');
    };

    return(
        <Fragment>
            <nav className="absolute w-full z-10 top-0 text-white">
                <div className="header-selection sticky-style-1 py-4">
                    <div className="container mx-auto">

                        {/* List Wrapper */}
                        <div className="flex flex-nowrap items-center justify-between">

                            {/* Logo */}
                            <Link href={"/"} >
                                <Image src={logo} height={60} width={80} alt={"logo"} className={"cursor-pointer"}/>
                            </Link>

                            {/* Link list */}
                            <div className="hidden lg:flex gap-x-6">

                                {/* About */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                        <Link href="/about">
                                            {language.button_1}
                                        </Link>
                                </div>

                                {/* Sermons */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="#sermon">
                                        {language.button_7}
                                    </Link>
                                </div>

                                {/* Events */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="#events">
                                        {language.button_2}
                                    </Link>
                                </div>

                                {/* Donation */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                        <Link href="#donation">
                                            {language.button_3}
                                        </Link>
                                </div>

                                {/*Contact */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                        <Link href="#team">
                                            {language.button_4}
                                        </Link>
                                </div>

                            </div>

                            {/* Language */}
                            <div className="hidden lg:flex">
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="/" locale={language.page}>
                                        {language.button_5}
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="hidden lg:grid">
                                <div className='hover:text-yellow-600 transition-colors delay-100'>
                                    <div className="ml-2 text-center">{language.button_6}</div>
                                    <a href="tel: 980-920-7074" className="ml-2 text-center">(980)-290-7074</a>
                                </div>
                                    
                            </div>

                            {/* Off-canvas Menu */}
                            <div className="flex lg:hidden">
                                <div onClick={showOffcanvas} id="toggle-button">
                                    <Image src={menu} width={30} alt={"logo"}/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>

            <SideNav language={language} showOffcanvas={showOffcanvas} offcanvas={offcanvas} logo={logo}/>

        </Fragment>
    )
}

export default Navbar
