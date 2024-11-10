function MobilePnl() {
    return ( 
        <div className="bg-secondary rounded-md flex items-center justify-center gap-8 text-sm absolute w-[-webkit-fill-available] left-0 bottom-[-16px] shadow-lg py-1">
            <div className="">
                Income 
                <br />
                £1000
            </div>
            <div className="divider-y w-[1px] h-[30px] bg-primary"></div>
            <div className="">
                Expenses 
                <br />
                £200
            </div>
        </div>
     );
}

export default MobilePnl;