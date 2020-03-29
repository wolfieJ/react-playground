import useForm from "../useForm";
import { act, renderHook } from '@testing-library/react-hooks';

describe('useForm()', () => {
    it('should return the intial state', () => {
        const { result } = renderHook(() => useForm({email: '', password: ''}));
        expect(result.current[0].email).toEqual('');
        expect(result.current[0].password).toEqual('');
    });

    it('should upadte the intial state', () => {
        const { result } = renderHook(() => useForm({email: '', password: ''}));
        act(() => result.current[1]({target: { name: 'email', value: 'Got'}}));
        act(() => result.current[1]({target: { name: 'password', value: 'It!'}}));
        expect(result.current[0].email).toEqual('Got');
        expect(result.current[0].password).toEqual('It!');
    });
});