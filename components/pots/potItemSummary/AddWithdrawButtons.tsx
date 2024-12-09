interface PotItem {
    current_amount: number;
    target_amount: number;
}

function AddWithdrawButtons({potItem, handleAddWithdrawMenuOpen}: { potItem: PotItem, handleAddWithdrawMenuOpen: () => void }) {
    return (  <div className="flex items-center gap-4 mt-2">
        {potItem?.current_amount > 0 && <button onClick={handleAddWithdrawMenuOpen} id="withdraw">- Withdraw</button>}
        {potItem?.current_amount < potItem?.target_amount && <button onClick={handleAddWithdrawMenuOpen} id="add">+ Add money</button>}
    </div> );
}

export default AddWithdrawButtons;