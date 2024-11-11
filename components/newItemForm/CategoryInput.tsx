import { useState } from "react";

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

function CategoryInput({ selectedType }: { selectedType: string }) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const filteredCategories = categories.filter(category => category.type === selectedType);
    return ( 
        <>
         {filteredCategories.length > 0 && (
                <div className="mb-4">
                    <label className="block  mb-2">Categories</label>
                    <div className="max-h-[240px] overflow-scroll">
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
        </>
     );
}

export default CategoryInput;