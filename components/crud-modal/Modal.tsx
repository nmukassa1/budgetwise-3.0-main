"use client";

import { Drawer } from "@mui/material";
import { useState } from "react";
import FormCarousel from "../newItemForm/FormCarousel";
import { CategoriesProvider } from "./context/CategoriesContext";

function Modal({ categories }: { categories: any }) {
    const [open, setOpen] = useState(false);

    return (
        <div id="modal" className="absolute py-5 top-0 right-0">
            <ModalButton setOpen={setOpen} open={open} />

            <Drawer anchor="top" open={open} sx={{ height: "100vh" }}>
                <div className="h-screen bg-secondary py-5">
                    <div className="mobile-container">
                        <div className="flex justify-end">
                            <ModalButton setOpen={setOpen} open={open} />
                        </div>

                        {/* Wrap FormCarousel in the CategoriesProvider */}
                        <CategoriesProvider categories={categories}>
                            <FormCarousel />
                        </CategoriesProvider>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Modal;

function ModalButton({ setOpen, open }: { setOpen: (open: boolean) => void; open: boolean }) {
    return (
        <button
            className={`grid place-content-center ${
                !open ? "text-primary bg-secondary" : "text-secondary bg-primary"
            } h-[35px] w-[35px] border border-secondary rounded-full`}
            onClick={() => setOpen(!open)}
        >
            {open ? "-" : "+"}
        </button>
    );
}