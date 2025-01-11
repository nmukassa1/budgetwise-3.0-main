import React from 'react';

interface HeaderProps {
    className?: string;
    children: string | React.ReactNode;
}

function Header({className, children} : HeaderProps) {
    return ( 
        <h1 className={`${className} font-bold text-4xl leading-[36px]`}>{children}</h1>
    );
}

export default Header;