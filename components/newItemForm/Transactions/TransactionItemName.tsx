function TransactionItemName() {
    return ( 
        <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
                type="text"
                name="name"
                placeholder="What would you like to name this?"
                className="w-full p-2 rounded-md border border-gray-700 focus:outline-none"
            />
        </div>
     );
}

export default TransactionItemName;