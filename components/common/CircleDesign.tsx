function CircleDesign({bgColor = "bg-error"} : {bgColor?: string}) {
    return ( 
        <div className="flex justify-center overflow-hidden mt-8">
            <div className={`${bgColor} h-[165px] w-[165px] rounded-full shrink-0`}></div>
            <div className={`${bgColor} h-[165px] w-[165px] rounded-full shrink-0`}></div>
            <div className={`${bgColor} h-[165px] w-[165px] rounded-full shrink-0`}></div>
        </div>
     );
}

export default CircleDesign;