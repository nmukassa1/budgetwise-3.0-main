import { useState, useCallback } from 'react';

interface AsyncAction<T, R extends { errors?: unknown; results?: unknown }> {
  (previousState: R, formData: T): Promise<R>;
}

interface UseActionStateReturn<T, R> {
  state: R;
  action: (formData: T) => Promise<void>;
  pending: boolean;
}

function useActionState<T, R extends { errors?: unknown; results?: unknown }>(
  asyncAction: AsyncAction<T, R>,
  initialState: R
): UseActionStateReturn<T, R> {
  const [state, setState] = useState<R>(initialState);
  const [pending, setPending] = useState<boolean>(false);

  const action = useCallback(async (formData: T): Promise<void> => {
    setPending(true);
    try {
      const result = await asyncAction(state, formData);
      setState((prevState) => ({
        ...prevState,
        errors: result.errors || undefined,
        results: result.results || undefined,
      }));
    } catch (error: unknown) {
      setState((prevState) => ({ ...prevState, errors: error }));
    } finally {
      setPending(false);
    }
  }, [asyncAction, state]);

  return { state, action, pending };
}

export default useActionState;
