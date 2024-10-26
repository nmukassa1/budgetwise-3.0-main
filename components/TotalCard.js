
"use client"
import { CurrencyPound, Money } from "@mui/icons-material";

export default function TotalSaved({icon, name, amount}){
    return(
        <div className="total-saved flex items-center gap-2 bg-background w-full rounded-lg p-[20px]">
            {icon && <div className="total-saved-icon text-primary">{icon}</div>}
            <div>
                <p className="text-primary">Total {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <div className="flex items-center -mt-[4px] text-primary">
                    <CurrencyPound sx={{fontSize: '2rem', }} />
                    <p className="text-[2rem] -ml-[4px] text-primary">{amount}</p>
                </div>
            </div>
        </div>
    )
}