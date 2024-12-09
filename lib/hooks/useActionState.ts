import { useState } from 'react';

interface ActionState<T> {
    data: T | null;
    errors: Record<string, any>;
    pending: boolean;
}

type ActionFunction<T> = (formData: T) => Promise<any>;

export function useActionState<T>(action: ActionFunction<T>, initialState: ActionState<T>) {
    const [state, setState] = useState<ActionState<T>>(initialState);

    const handleAction = async (formData: T) => {
        setState({ ...state, pending: true });
        try {
            const data = await action(formData);
            setState({ data, errors: {}, pending: false });
        } catch (errors) {
            setState({ data: null, errors, pending: false });
        }
    };

    return [state, handleAction, state.pending] as const;
}