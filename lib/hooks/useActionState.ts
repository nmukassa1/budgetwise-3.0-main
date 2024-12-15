import { useState, useCallback } from 'react';

// interface ActionState = {
//   state: T;
//   action: (e: React.FormEvent<HTMLFormElement>) => void;
//   pending: boolean;
// };

// function useActionState<T>(actionFunction: (data: T) => Promise<any>, initialState: T): ActionState<T> {
//   const [state, setState] = useState<T>(initialState);
//   const [pending, setPending] = useState<boolean>(false);

//   const action = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setPending(true);
//     try {
//       await actionFunction(state);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setPending(false);
//     }
//   }, [state, actionFunction]);

//   return { state, action, pending };
// }

function useActionState<T>(actionFunction: (data: T) => Promise<unknown>, initialState: T) {
  const [state, setState] = useState(initialState);
  const [pending, setPending] = useState<boolean>(false);

  const action = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    try {
      await actionFunction(state);
      setState(initialState); // Reset state after action
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  }, [state, actionFunction, initialState]);

  return { state, action, pending };

}

export default useActionState;