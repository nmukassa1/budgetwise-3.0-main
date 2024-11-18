function TransactionDateInput() {
    return ( 
        <div className="mb-4">
                <label className="block  mb-1">Date</label>
                <button type="button" className="w-full p-2 rounded-md border border-gray-700 text-left">
                    Today
                </button>
            </div>
     );
}

export default TransactionDateInput;