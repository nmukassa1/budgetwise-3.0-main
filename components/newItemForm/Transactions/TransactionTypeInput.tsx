function TransactionTypeInput({selectedType, setSelectedType} : {selectedType: string, setSelectedType: (type: string) => void}) {
    return ( 
        <div className="mb-4">
            <label className="block  mb-1">Type</label>
            <select
                name="type"
                className="w-full p-2 rounded-md border border-gray-700"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
                <option value="pots">Pots</option>
            </select>
        </div>
     );
}

export default TransactionTypeInput;