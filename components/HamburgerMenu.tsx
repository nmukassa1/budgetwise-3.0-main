"use client"
import { Menu, Close } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import Link from "next/link";
import { useState } from "react";


function HamburgerMenu() {
    const [openSlide, setOpenSlide] = useState(false);
    const [zIndex, setZIndex] = useState('z-0');

    function handleOpenSlide() {
        setOpenSlide(!openSlide);
        if (openSlide) {
            setZIndex('z-0');
        } else {
            setZIndex('z-[9999]');
        }
    }

    return ( 
        <>
            <button onClick={handleOpenSlide} className={`${zIndex}`}>
                {openSlide ? <Close /> : <Menu />}
            </button> 
            <Drawer open={openSlide} anchor="left"> 
                <div className="w-screen h-screen bg-primary pt-[60px] text-white">
                    <ul className="text-2xl">
                        <li className="border-t-2 py-4 ">
                            <div className="mobile-container">
                                <Link href={'#'}>TRANSACTIONS</Link>
                            </div>
                        </li>
                        <li className="border-t-2 py-4 ">
                            <div className="mobile-container">
                                <Link href={'#'}>SAVINGS</Link>     
                            </div>
                        </li>
                        <li className="border-t-2 py-4 border-b-2">
                            <div className="mobile-container">
                                <Link href={'#'}>ACCOUNT</Link>
                            </div>
                        </li>
                    </ul>

                    <div className="mobile-container">
                        
                    </div>
                </div>
            </Drawer>
        </>
     );
}

export default HamburgerMenu;