import Bar from "./Bar";
import { FC } from 'react';

interface ItemProps {
  potName: string;
  amount: number;
}

const Item: FC<ItemProps> = ({ potName, amount }) => {
  return (
    <div className="pot-item flex gap-2 h-full">
      <Bar />
      <div>
        <p className="text-primary text-sm">{potName}</p>
        <p className="text-primary text-[1.7rem] font-bold text-sm">£{amount}</p>
      </div>
    </div>
  );
}

export default Item;