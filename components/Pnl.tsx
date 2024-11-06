import Card from "./Card";

export default function Pnl() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Net />
            <Income />
            <Expenses />
        </div>
    )
}

function Income(){
    return (
        <>
            <Card className="bg-secondary">
                <p className="text-primary">Income</p>
                <p className="text-primary text-[1.8rem] font-bold">£2,000.00</p>
            </Card>
        </>
    )
}
function Expenses(){
    return (
        <>
            <Card className="bg-secondary">
                <p className="text-primary">Expenses</p>
                <p className="text-primary text-[1.8rem] font-bold">£1,000.00</p>
            </Card>
        </>
    )
}
function Net(){
    return (
        <>
            <Card className="bg-primary">
                <p className="text-secondary">Net</p>
                <p className="text-secondary text-[1.8rem] font-bold">£1,000.00</p>
            </Card>
        </>
    )
}