/*
  * The useActionState hook is a custom hook that manages the state of an async action.
  * It takes an async action function and an initial state as arguments and returns the current state,
  * a function to trigger the action, and a boolean flag indicating whether the action is pending.
  *
  * @param asyncAction - The async action function that performs the action and returns the new state.
  * @param initialState - The initial state of the action.
  * @returns The current state, a function to trigger the action, and a boolean flag indicating whether the action is pending.
*/
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
