interface InputProps {
    value: string | number;
    placeholder?: string;
    type: string;
    name: string;
    id: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

function Input({value = "", placeholder, type='text', name, id, handleChange, className} : InputProps) {
    
    return ( 
        <div className="flex items-center mt-4">
          <input
            placeholder={placeholder}
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
            className={"text-secondary p-2 border-white border-2 flex items-center gap-2 rounded-md bg-transparent focus:outline-none w-full text-center " + className}
          />
        </div>
     );
}

export default Input;