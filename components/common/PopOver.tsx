function PopOver({children, className} : {children?: React.ReactNode, className?: string}) {
    return ( 
        <div className={`${className} w-fit`}>
            {children}
        </div>
     );
}

export default PopOver;