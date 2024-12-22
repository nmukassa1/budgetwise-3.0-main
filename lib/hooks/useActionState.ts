import { useState, useCallback } from 'react';

interface AsyncAction<InputData, State> {
  (currentState: State, inputData: InputData): Promise<State>;
}

interface UseActionStateReturn<InputData, State> {
  state: State;
  action: (inputData: InputData) => Promise<void>;
  pending: boolean;
}

function useActionState<InputData, State extends { errors?: unknown; results?: unknown }>(
  asyncAction: AsyncAction<InputData, State>,
  initialState: State
): UseActionStateReturn<InputData, State> {
  const [state, setState] = useState<State>(initialState);
  const [pending, setPending] = useState<boolean>(false);

  const action = useCallback(async (inputData: InputData): Promise<void> => {
    setPending(true);
    try {
      const result = await asyncAction(state, inputData);
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
