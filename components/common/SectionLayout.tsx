import React from "react"

export default function SectionLayout({children} : {children: React.ReactNode}) {
    return(
        <div className='custom-container flex flex-col h-full snap-center'>
            {children}
        </div>
    )
}