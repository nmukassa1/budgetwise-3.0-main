import { Money } from "@mui/icons-material";


export default function TotalSaved(){
    return(
        <div className="total-saved">
            <div className="total-saved-icon">
                <Money />
            </div>
            <div>
                <p>Total Saved</p>
                <div className="flex items-center -mt-[4px]">
                    {/* <CurrencyPound sx={{fontSize: '2rem', }} /> */}
                    <p className="text-[2rem] -ml-[4px]">£2000</p>
                </div>
            </div>
        </div>
    )
}