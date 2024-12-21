import { renderHook, act } from '@testing-library/react-hooks';
// import '@testing-library/jest-dom'
import useActionState from '../useActionState';

interface State {
  data?: string;
  errors?: unknown;
}

// interface FormData {
//   input: string;
// }

const initialState: State = { data: 'initial' };

describe('useActionState', () => {
  it('should initialize with the given initial state', () => {
    const { result } = renderHook(() => useActionState(jest.fn(), initialState));
    expect(result.current.state).toEqual(initialState);
    expect(result.current.pending).toBe(false);
  });

  it('should set pending to true when action is called and false when it completes', async () => {
    const asyncAction = jest.fn().mockResolvedValue({ data: 'result' });
    const { result } = renderHook(() => useActionState(asyncAction, initialState));

    act(() => {
      result.current.action({ input: 'test' });
    });

    expect(result.current.pending).toBe(true);

    await act(async () => {
      await result.current.action({ input: 'test' });
    });

    expect(result.current.pending).toBe(false);
  });

  it('should update state with result from asyncAction', async () => {
    const asyncAction = jest.fn().mockResolvedValue({ data: 'result' });
    const { result } = renderHook(() => useActionState(asyncAction, initialState));

    await act(async () => {
      await result.current.action({ input: 'test' });
    });

    expect(result.current.state).toEqual({ data: 'result' });
  });

  it('should update state with errors if asyncAction throws', async () => {
    const error = new Error('test error');
    const asyncAction = jest.fn().mockRejectedValue(error);
    const { result } = renderHook(() => useActionState(asyncAction, initialState));

    await act(async () => {
      await result.current.action({ input: 'test' });
    });

    expect(result.current.state.errors).toBe(error);
  });
});