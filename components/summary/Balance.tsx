import SummaryHeader from '../common/SummaryHeader';

interface BalanceProps {
    actualBalance: number,
    budgetedBalance: number,
}

function Balance({actualBalance, budgetedBalance}: BalanceProps) {


    return ( 
        <SummaryHeader title='Balance'>
            <span>£{actualBalance} </span> /
            <span className='text-2xl font-thin'> £{budgetedBalance.toLocaleString().slice(1)}</span>
        </SummaryHeader>
     );
}

export default Balance;