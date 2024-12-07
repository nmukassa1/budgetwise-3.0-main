
"use client"
import { CurrencyPound, Money } from "@mui/icons-material";
import { ReactNode } from "react";

interface TotalCardProps {
    icon?: ReactNode;
    name: string;
    amount: number;
}

export default function TotalCard({ icon, name, amount }: TotalCardProps) {
    return (
        <div className="total-card">
            {icon && <div className="text-primary">{icon}</div>}
            <div>
                <p className="text-primary">Total {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <div className="flex items-center -mt-[4px] text-primary">
                    <CurrencyPound sx={{ fontSize: '2rem' }} />
                    <p className="text-[2rem] -ml-[4px] text-primary">{amount}</p>
                </div>
            </div>
        </div>
    );
}