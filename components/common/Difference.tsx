interface DifferenceProps {
    num: number;
    className?: string;
    type?: 'income' | 'expense';
}
export default function Difference({num, className, type} : DifferenceProps) {
    const isPositive = num >= 0;

    // const greenOrRed = 


    const formattedNum = (num:number) => {
        const arrNum = num.toLocaleString().split('')
        if (arrNum[0] === '-') {
            arrNum.shift()
        }
        return arrNum.join('')
    };

    return (
        <span className={`${className} text-sm ${isPositive ? 'text-success' : 'text-error'}`}> £{formattedNum(num)}</span>
    )
}