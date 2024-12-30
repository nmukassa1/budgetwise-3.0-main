// useCustomForm.ts
import { useState } from "react";
import { ErrorFetch, SuccessFetch } from "../types";

interface FormData {
    [key: string]: string | number 
}

interface UseFormProps {
    initialFormData?: FormData;
    action?: (formData: FormData) => Promise<object>;
}

export default function useCustomForm({ initialFormData = {}, action }: UseFormProps) {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [pending, setPending] = useState(false);
    const [result, setResult] = useState<object | SuccessFetch | ErrorFetch>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // console.log(name, value);
        
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // useEffect(() => {
    //     console.log(formData);
        
    // }, [formData])

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
        
        setPending(true);
        try {
            if (action) {
                const result = await action(formData);
                setResult(result);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setPending(false);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        pending,
        result
    };
}