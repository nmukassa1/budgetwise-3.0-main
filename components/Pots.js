import { CurrencyPound, Money } from "@mui/icons-material"
import Category from "./Category"

export default function Pots() {
    return(
        <Category categoryName='Pots'>
            <div className="grid grid-cols-2 gap-4 ">
                <TotalSaved />
                <div className="grid grid-cols-2 gap-2">
                    <PotItem potName='Holiday' amount='200' />
                    <PotItem potName='Emergency' amount='1000' />
                    <PotItem potName='Housing' amount='800' />
                </div>
            </div>
        </Category>
    )
}

function TotalSaved(){
    return(
        <div className="total-saved flex items-center gap-2 bg-background w-full rounded-lg p-[20px]">
            <div className="total-saved-icon">
                <Money />
            </div>
            <div>
                <p>Total Saved</p>
                <div className="flex items-center -mt-[4px]">
                    <CurrencyPound sx={{fontSize: '2rem', }} />
                    <p className="text-[2rem] -ml-[4px]">2000</p>
                </div>
            </div>
        </div>
    )
}

export function PotItem({potName, amount}){
    return(
        // <div className="pot-item-container w-full h-full grid grid-cols-2">
            <div className="pot-item flex gap-2 h-full">
                <div className="bar h-auto w-[3.5px] bg-red-300"></div>
                <div>
                    <p className="text-primary text-sm">{potName}</p>
                    <p className="text-primary text-[1.7rem] font-bold text-sm">£{amount}</p>
                </div>
            </div>
        // </div>
    )
}