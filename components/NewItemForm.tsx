import React, { useState } from 'react';

type Category = {
    name: string;
    remainingAmount: number;
    color: string;
    icon: string; // Use any icon representation, e.g., a URL or emoji
    type: string;
};

const categories: Category[] = [
    { name: 'Entertainment', remainingAmount: 32.00, color: 'pink', icon: '🎬', type: 'expense' },
    { name: 'Fitness', remainingAmount: 25.00, color: 'green', icon: '💪', type: 'expense'  },
    { name: 'Groceries', remainingAmount: 250.00, color: 'blue', icon: '🛒', type: 'expense' },
    { name: 'Misc spending', remainingAmount: 10.00, color: 'purple', icon: '😃', type: 'expense' },
    { name: 'Public transport', remainingAmount: 50.00, color: 'teal', icon: '🚇', type: 'expense' },
    { name: 'Emergency Fund', remainingAmount: 50.00, color: 'teal', icon: '‼️', type: 'pots' },
];

const NewItemForm: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('income');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [repeat, setRepeat] = useState<string>('never');

    const filteredCategories = categories.filter(category => category.type === selectedType);

    return (
        <form className="text-primary rounded-md w-full max-w-md mx-auto">
            <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                    type="text"
                    placeholder="What would you like to name this?"
                    className="w-full p-2 rounded-md border border-gray-700 focus:outline-none"
                />
            </div>

            <div className="mb-4">
                <label className="block  mb-1">Type</label>
                <select
                    className="w-full p-2 rounded-md border border-gray-700"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                    <option value="pots">Pots</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block  mb-1">Date</label>
                <button type="button" className="w-full p-2 rounded-md border border-gray-700 text-left">
                    Today
                </button>
            </div>

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

            {filteredCategories.length > 0 && (
                <div className="mb-4">
                    <label className="block  mb-2">Categories</label>
                    <div>
                        {filteredCategories.map((category) => (
                            <div
                                key={category.name}
                                className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                                    selectedCategory === category.name ? 'bg-primary text-secondary' : ''
                                }`}
                                onClick={() => setSelectedCategory(category.name)}
                            >
                                <div className="flex items-center gap-2">
                                    <span
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                                        style={{ backgroundColor: category.color }}
                                    >
                                        {category.icon}
                                    </span>
                                    <span>{category.name}</span>
                                </div>
                                <span className="">£{category.remainingAmount.toFixed(2)} left</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="border-t mt-4 pt-4">
                <button
                    type="button"
                    className="w-full p-2 rounded-md  border border-gray-700 "
                >
                    Add new category
                </button>
            </div>

          
        </form>
    );
};

export default NewItemForm;