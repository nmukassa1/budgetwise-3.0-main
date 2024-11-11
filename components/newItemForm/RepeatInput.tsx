import { useState } from "react";

function RepeatInput() {
    const [repeat, setRepeat] = useState<string>('never');
    return ( 
        <div className="mb-4">
                <label className="block  mb-1">Repeat</label>
                <select
                    className="w-full p-2 rounded-md border border-gray-700"
                    value={repeat}
                    onChange={(e) => setRepeat(e.target.value)}
                >
                    <option value="never">Never</option>
                    <option value="always">Always</option>
                </select>
            </div>
     );
}

export default RepeatInput;