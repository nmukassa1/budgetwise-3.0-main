function RepeatInput() {
    return ( 
        <div className="mb-4">
            <label className="block mb-1">Repeat</label>
            <select
                className="w-full p-2 rounded-md border border-gray-700"
                name="repeat"
                defaultValue="never"
            >
                <option value="never">Never</option>
                <option value="always">Always</option>
            </select>
        </div>
    );
}

export default RepeatInput;