function ScrollIndicator() {
    return ( 
        <div className="flex flex-col gap-2 fixed right-[13px] bottom-[30%]">
            <div className="bg-black h-[15px] w-[15px] rounded-full"></div>
            <div className="bg-gray-500 h-[15px] w-[15px] rounded-full"></div>
            <div className="bg-gray-500 h-[15px] w-[15px] rounded-full"></div>
        </div>
     );
}

export default ScrollIndicator;